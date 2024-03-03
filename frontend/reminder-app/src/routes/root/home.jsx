import React, { useCallback, Suspense, useState, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { IoIosRefresh } from "react-icons/io";
import { toast } from "react-hot-toast";
import FormComponent from "@components/ui/form";
import ReminderContainer from "@components/ui/reminderContainer";
import { useAuth } from "@contexts/auth";
import { useReactQuery } from "@contexts/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import getReminders from "@lib/api/fetch/getReminders";
import setReminder from "@lib/api/fetch/setReminder";
import deleteReminder from "@lib/api/fetch/deleteReminder";
import fetchSubscriptionInfo from "@lib/api/fetch/fetchSubscriptionInfo";
import ReminderContainerLoading from "@components/ui_loading/ReminderContainerLoading";
import ReminderContainerError from "@components/ui_error/ReminderContainerError";
import WarningMssg from "@components/ui/warningMssg";

const Home = () => {
  const { tokens, email } = useAuth();
  const queryClient = useReactQuery();
  const isPending = useCallback(
    (data) => !data || data?.isPendingVerification == "true",
    [],
  );

  const { data, isFetched } = useQuery({
    queryKey: ["fetchSubscriptionInfo"],
    queryFn: () => fetchSubscriptionInfo({ accessToken: tokens.accessToken }),
    refetchInterval: (query) =>
      isPending(query.state.data) ? 10000 : undefined,
    refetchIntervalInBackground: true,
    suspense: false,
  });

  const { data: submitData, mutate: onSubmitHandler } = useMutation({
    mutationFn: setReminder,
    onSuccess: () => {
      toast.success("Reminder has been set successfully");
      setTimeout(() =>
        queryClient.refetchQueries({ queryKey: ["getReminders"] }, 1000),
      );
    },
    onError: (err) =>
      toast.error(
        `Could not set reminder Something went wrong: ${err.message}`,
      ),
  });

  const { data: cancelData, mutate: deleteHandler } = useMutation({
    mutationFn: deleteReminder,
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ["getReminders"] });
    },
    onError: (err) => toast.error(`Failed to delete: ${err.message}`),
  });

  const showSubConfMessage = isFetched & isPending(data);

  return (
    <div className="mt-3 grid grid-cols-3 px-3 max-lg:flex max-lg:flex-col-reverse max-lg:px-10 max-md:gap-8 max-md:px-0">
      <div
        className="col-span-2 min-h-[80vh] py-6 pl-10 pr-4 shadow-xl max-lg:col-span-1 
            max-lg:min-h-[100px] max-lg:px-2 max-lg:py-10
            max-md:min-h-max max-md:px-3"
      >
        <div className="relative w-full">
          <h1 className="mb-5 font-serif text-primary max-lg:pl-3 max-lg:text-center max-md:mr-4 max-md:text-left max-md:text-[1.3rem]">
            Previous reminders
          </h1>
          <IoIosRefresh
            className="absolute right-0 top-0 rounded-full p-2 text-[35px] hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 max-sm:-top-1 max-sm:text-[28px] max-sm:hover:bg-gray-200
                  "
            onClick={() =>
              queryClient.resetQueries({ queryKey: ["getReminders"] })
            }
          />
        </div>
        <ErrorBoundary fallback={<ReminderContainerError />}>
          {/* <ReminderContainerLoading /> */}
          <Suspense fallback={<ReminderContainerLoading err />}>
            <ReminderContainer
              fetchFn={() => getReminders({ accessToken: tokens.accessToken })}
              deleteHandler={(mid, tid) =>
                deleteHandler({
                  messageid: mid,
                  accessToken: tokens.accessToken,
                  toastid: tid,
                })
              }
            />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div
        className="formclass flex flex-col gap-4 px-10 py-6 shadow-xl 
          max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:px-4"
      >
        <h1 className=" w-full text-nowrap font-serif text-primary max-md:text-[1.3rem] md:overflow-clip">
          Set new reminder
        </h1>
        <>
          {showSubConfMessage ? (
            <WarningMssg>
              Please check your email and confirm subscription to proceed!!
            </WarningMssg>
          ) : (
            ""
          )}
          {useMemo(
            () => (
              <FormComponent
                onSubmitHandler={onSubmitHandler}
                disabled={showSubConfMessage}
              />
            ),
            [showSubConfMessage],
          )}
        </>

        {/* <button onClick={() => null}>Add</button> */}
      </div>
    </div>
  );
};

export default Home;
