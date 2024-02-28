import React, { useState, useMemo } from "react";
import { MdCancel } from "react-icons/md";
import { ExpandableText } from "@components/expandable.text";
import ReminderCardDelay from "./reminderCardDelay";
import toast from "react-hot-toast";

const ReminderCard = ({ reminder, deleteHandler }) => {
  const { messageid, message, subject, delay, delayType, timestamp } = reminder;

  return (
    <>
      <div
        className={`flex max-w-[480px] animate-fade flex-col justify-between rounded-xl bg-gray-100 text-white-400 shadow-lg 
          shadow-black 
          animate-delay-300 animate-once max-md:grow`}
      >
        {useMemo(
          () => (
            <>
              <div
                className="relative rounded-t-lg bg-primary px-1 py-2
                          "
              >
                <p className="mx-auto max-w-[80%] overflow-clip text-nowrap text-center font-sans font-bold tracking-wider">
                  {subject ?? "Subject of email"}
                </p>
                <MdCancel
                  key={messageid}
                  className="text-bold absolute right-1 top-1 hover:cursor-pointer hover:text-red-400"
                  onClick={() => {
                    const id = toast.success("Deleting item..");
                    deleteHandler(messageid, id);
                  }}
                />
              </div>
              <div className="px-3 py-4">
                <ExpandableText classes="text-black font-sans leading-loose text-sm">
                  {message}
                </ExpandableText>
              </div>
            </>
          ),
          [reminder],
        )}
        <div className="rounded-b-md bg-gray-900 px-4 py-2 font-mono text-sm font-semibold text-white-400">
          <ReminderCardDelay
            delay={delay}
            delayType={delayType}
            timestamp={timestamp}
          />
        </div>
      </div>
    </>
  );
};

export default ReminderCard;
