import ReminderCard from "./reminderCard";
import { useMemo } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ReminderContainer = ({ fetchFn, deleteHandler }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["getReminders"],
    queryFn: fetchFn,
    suspense: true,
    retry: false,
  });
  // console.log(data)
  return (
    <div
      className={`relative grid max-h-[68vh] grid-cols-2 gap-x-9 gap-y-10 overflow-x-hidden overflow-y-scroll
    pb-10 pl-2 pr-16 pt-3 
    max-lg:max-h-max max-lg:overflow-y-visible max-lg:pr-2 
    max-md:flex max-md:grow-[2] max-md:flex-row max-md:flex-wrap max-md:items-center max-md:justify-center max-md:px-3
    ${data.length <= 6 ? "scrollbar-none" : "scrollbar scrollbar-track-white-400 scrollbar-thumb-slate-400"}`}
    >
      {data.length === 0 ? (
        <p className="col-span-2 font-serif text-2xl text-gray-600 text-opacity-85">
          Please add reminders to see history.
        </p>
      ) : (
        // useMemo(() =>
        data.map((r, index) => (
          <ReminderCard
            key={index}
            reminder={r}
            deleteHandler={deleteHandler}
          />
        ))
        // , [data.length])
      )}
    </div>
  );
};

export default ReminderContainer;
