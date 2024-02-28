import React, { useCallback, Suspense, useState, useMemo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { IoIosRefresh } from "react-icons/io";
import { toast } from 'react-hot-toast'
import FormComponent from "@components/ui/form"
import ReminderContainer from '@components/ui/reminderContainer';
import { useAuth } from '@contexts/auth';
import { useReactQuery } from '@contexts/react-query'
import { useMutation, useQuery } from '@tanstack/react-query';
import getReminders from '@lib/api/fetch/getReminders';
import setReminder from '@lib/api/fetch/setReminder';
import deleteReminder from '@lib/api/fetch/deleteReminder';
import fetchSubscriptionInfo from '@lib/api/fetch/fetchSubscriptionInfo';
import ReminderContainerLoading from '@components/ui_loading/ReminderContainerLoading';
import ReminderContainerError from '@components/ui_error/ReminderContainerError';
import WarningMssg from '@components/ui/warningMssg';

const Home = () => {
  const { tokens, email } = useAuth()
  const queryClient = useReactQuery()
  const isPending = useCallback((data) => !data || data?.isPendingVerification=='true', [])

  const { data, isFetched } = useQuery({
    queryKey: ["fetchSubscriptionInfo"], 
    queryFn: () => fetchSubscriptionInfo({accessToken: tokens.accessToken}), 
    refetchInterval: (query) => isPending(query.state.data) ? 10000 : undefined,
    refetchIntervalInBackground: true,
    suspense: false
  })

  const { data: submitData, mutate: onSubmitHandler } = useMutation({
    mutationFn: setReminder,
    onSuccess: () => {
      toast.success("Reminder has been set successfully")
      setTimeout(() => queryClient.refetchQueries({queryKey: ['getReminders']}, 1000))
    },
    onError: (err) => toast.error(`Could not set reminder Something went wrong: ${err.message}`)
  })

  const { data: cancelData, mutate: deleteHandler } = useMutation({
    mutationFn: deleteReminder,
    onSuccess: () => {
      queryClient.resetQueries({queryKey: ['getReminders']})
    },
    onError: (err) => toast.error(`Failed to delete: ${err.message}`)
  })

  const showSubConfMessage = isFetched & isPending(data)
  
  return (
    <div className='mt-3 px-3 grid grid-cols-3 max-lg:flex max-lg:flex-col-reverse max-lg:px-10 max-md:px-0'>
      <div className='py-6 pr-4 pl-10 col-span-2 shadow-xl min-h-[80vh] max-lg:col-span-1 
            max-lg:min-h-auto max-lg:py-10 max-lg:px-2
            max-md:min-h-max max-md:px-3'>
        <div className='relative w-full'>
          <h1 className='mb-5 text-primary font-serif max-lg:text-center max-md:text-left max-md:mr-4 max-md:text-lg max-lg:pl-3'>Previous reminders</h1>
          <IoIosRefresh className='text-[35px] max-sm:text-[28px] p-2 rounded-full hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80 absolute top-0 right-0 max-sm:-top-1 max-sm:hover:bg-gray-200
                  '
              onClick={() => queryClient.resetQueries({queryKey: ["getReminders"]})}
           />
        </div>
        <ErrorBoundary fallback={<ReminderContainerError />}>
          {/* <ReminderContainerLoading /> */}
          <Suspense fallback={<ReminderContainerLoading err />}>
            <ReminderContainer fetchFn={() => getReminders({accessToken: tokens.accessToken})} deleteHandler={(mid, tid) => deleteHandler({messageid: mid, accessToken: tokens.accessToken, toastid:tid})} />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className='formclass flex flex-col gap-4 px-10 py-6 shadow-xl 
          max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:px-4'>
        <h1 className=' w-full text-primary font-serif md:overflow-clip text-nowrap max-md:text-lg'>Set new reminder</h1>
        <>
          {
            showSubConfMessage ? (
              <WarningMssg>Please check your email and confirm subscription to proceed!!</WarningMssg>
              ) : ("")
          }
          {
            useMemo(() => <FormComponent onSubmitHandler={onSubmitHandler} disabled={showSubConfMessage} /> ,
              [showSubConfMessage])
          }
        </>
        
      {/* <button onClick={() => null}>Add</button> */}
      </div>
    </div>
  )
}

export default Home