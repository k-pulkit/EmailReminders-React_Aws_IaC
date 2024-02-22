import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@contexts/auth';
import { epochAfterDelay, getLocalTimeFromEpoch } from '@utils/common';

const FormComponent = () => {
  const {email} = useAuth()
  const formDefaults = {
                email: email ?? "email@gmail.com",
                subject: "Subject of message",
                message: "Enter your reminder message here",
                delay: 60,
                delayType: "Seconds"
                       }

  const { register, handleSubmit, reset, errors, getValues, watch } = useForm({defaultValues: formDefaults});
  useEffect(() => reset(formDefaults), [reset, email])
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-full mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          disabled
          {...register('email', { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {/* {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>} */}
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
          Subject
        </label>
        <input
          type="subject"
          id="subject"
          name="subject"
          {...register('subject', { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {/* {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>} */}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          {...register('message', { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {/* {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>} */}
      </div>
      
      <div className="mb-4 grid grid-cols-2 max-lg:flex max-lg:flex-col gap-4">
        <div className="flex flex-col justify-start items-start">
            <label htmlFor="delay" className="block text-gray-700 text-sm font-bold mb-2">
            Delay
            </label>
            <input
            type="number"
            id="delay"
            name="delay"
            {...register('delay', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {/* {errors.delay && <p className="text-red-500 text-xs italic">{errors.delay.message}</p>} */}
        </div>

        <div className="flex flex-col justify-start items-start">
            <label htmlFor="delayType" className="block text-gray-700 text-sm font-bold mb-2 w-full
            overflow-clip text-nowrap">
            Delay Unit
            </label>
            <select
            id="delayType"
            name="delayType"
            {...register('delayType', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
            <option value="Seconds">Seconds</option>
            <option value="Hours">Hours</option>
            <option value="Days">Days</option>
            </select>
            {/* {errors.delayType && <p className="text-red-500 text-xs italic">{errors.delayType.message}</p>} */}
        </div>

      </div>

      <div className='w-[90%] mx-auto mb-2 mt-6 bg-slate-200 shadow-md px-2 py-2 shadow-black font-mono text-primary text-center text-sm font-semibold tracking-widest'>
        <p>{getLocalTimeFromEpoch(epochAfterDelay(watch("delay"), watch("delayType")))}</p>
      </div>
      
      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          className="mt-4 hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        <button
          className="mt-4 hover:cursor-pointer bg-coral-red hover:bg-red-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          onClick={() => reset(formDefaults)}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
