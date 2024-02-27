import React, { useCallback, Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { IoIosRefresh } from "react-icons/io";
import { toast } from 'react-hot-toast'
import FormComponent from "@components/ui/form"
import ReminderContainer from '@components/ui/reminderContainer';
import { useAuth } from '@contexts/auth';
import { useReactQuery } from '@contexts/react-query'
import { useMutation, useQuery } from '@tanstack/react-query';
import getReminders from '@lib/api/fakefetch/getReminders';
import setReminder from '@lib/api/fakefetch/setReminder';
import deleteReminder from '@lib/api/fakefetch/deleteReminder';
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

  const { mutate: onSubmitHandler } = useMutation({
    mutationFn: setReminder,
    onSuccess: () => {
      toast.success("Reminder has been set successfully")
      setTimeout(() => queryClient.refetchQueries({queryKey: ['getReminders']}, 1000))
    },
    onError: (err) => toast.error(`Something went wrong: ${err.message}`)
  })

  const { mutate: deleteHandler } = useMutation({
    mutationFn: deleteReminder,
    onSuccess: () => {
      toast.success("Deleted successfully")
      queryClient.resetQueries({queryKey: ['getReminders']})
    },
    onError: (err) => toast.error(`Failed to delete: ${err.message}`)
  })

  const showSubConfMessage = isFetched & isPending(data)
  
  return (
    <div className='mt-3 px-3 grid grid-cols-3 max-lg:flex max-lg:flex-col-reverse max-lg:px-10'>
      <div className='py-6 pr-4 pl-10 col-span-2 shadow-xl min-h-[80vh] max-lg:col-span-1 max-lg:min-h-auto max-lg:pl-4'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='mb-5 text-primary font-serif max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>Previous reminders</h1>
          <IoIosRefresh className='text-[35px] p-2 rounded-full hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-80'
              onClick={() => queryClient.resetQueries({queryKey: ["getReminders"]})}
           />
        </div>
        <ErrorBoundary fallback={<ReminderContainerError />}>
          {/* <ReminderContainerLoading /> */}
          <Suspense fallback={<ReminderContainerLoading err />}>
            <ReminderContainer fetchFn={getReminders} deleteHandler={deleteHandler} />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className='formclass flex flex-col gap-4 px-10 py-6 shadow-xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
        <h1 className=' text-primary font-serif'>Set new reminder</h1>
        <>
          {
            showSubConfMessage ? (
              <WarningMssg>Please check your email and confirm subscription to proceed!!</WarningMssg>
              ) : ("")
          }
          <FormComponent onSubmitHandler={onSubmitHandler} disabled={showSubConfMessage} /> 
        </>
        
      {/* <button onClick={() => null}>Add</button> */}
      </div>
    </div>
  )
}

export default Home