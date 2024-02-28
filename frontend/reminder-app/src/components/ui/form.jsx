import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/auth";
import { epochAfterDelay, getLocalTimeFromEpoch } from "@utils/common";

const FormComponent = ({ onSubmitHandler, disabled }) => {
  const { email, tokens } = useAuth();
  const formDefaults = {
    email: email ?? "email@gmail.com",
    subject: "Subject of message",
    message: "Enter your reminder message here",
    delay: 60,
    delayType: "Seconds",
  };

  const { register, handleSubmit, reset, errors, setValue, watch } = useForm({
    defaultValues: formDefaults,
  });
  useEffect(() => reset(formDefaults), [reset, email]);

  const onSubmit = (data) => {
    onSubmitHandler({ ...data, accessToken: tokens.accessToken });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative mx-auto w-full 
    animate-fade animate-delay-100 animate-once"
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          disabled
          {...register("email", { required: true })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {/* {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>} */}
      </div>

      <div className="mb-4">
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Subject
        </label>
        <input
          type="subject"
          id="subject"
          name="subject"
          {...register("subject", { required: true })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {/* {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>} */}
      </div>

      <div className="mb-3">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          {...register("message", { required: true })}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {/* {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>} */}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4 max-lg:flex max-lg:flex-col">
        <div className="flex flex-col items-start justify-start">
          <label
            htmlFor="delay"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Delay
          </label>
          <input
            type="number"
            id="delay"
            name="delay"
            {...register("delay", { required: true, valueAsNumber: true })}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
          {/* {errors.delay && <p className="text-red-500 text-xs italic">{errors.delay.message}</p>} */}
        </div>

        <div className="flex flex-col items-start justify-start">
          <label
            htmlFor="delayType"
            className="mb-2 block w-full overflow-clip text-nowrap text-sm
            font-bold text-gray-700"
          >
            Delay Unit
          </label>
          <select
            id="delayType"
            name="delayType"
            {...register("delayType", { required: true })}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          >
            <option value="Seconds">Seconds</option>
            <option value="Minutes">Minutes</option>
            <option value="Hours">Hours</option>
            <option value="Days">Days</option>
          </select>
          {/* {errors.delayType && <p className="text-red-500 text-xs italic">{errors.delayType.message}</p>} */}
        </div>
      </div>

      <div className="mx-auto mb-4 mt-8 w-[90%] bg-slate-200 px-2 py-2 text-center font-mono text-sm font-semibold tracking-widest text-primary shadow-md shadow-black">
        <p>
          {getLocalTimeFromEpoch(
            epochAfterDelay(watch("delay"), watch("delayType")),
          )}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 max-lg:px-2">
        <button
          type="submit"
          disabled={disabled}
          className={`focus:shadow-outline  mt-4 rounded px-6 py-2 font-bold text-white focus:outline-none 
                      ${disabled ? "bg-gray-500 hover:cursor-not-allowed hover:bg-gray-700" : "bg-blue-500 hover:cursor-pointer hover:bg-blue-700"}`}
        >
          Submit
        </button>
        <div
          className="focus:shadow-outline mt-4 rounded bg-coral-red px-6 py-2 font-bold text-white hover:cursor-pointer hover:bg-red-600 focus:outline-none"
          onClick={() => reset(formDefaults)}
        >
          Reset
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
