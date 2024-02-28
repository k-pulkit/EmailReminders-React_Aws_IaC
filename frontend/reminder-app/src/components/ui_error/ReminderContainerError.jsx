import React, { useEffect } from "react";

const ReminderContainerError = () => {
  return (
    <div className="max-h-[68vh] pb-10 pr-16 pt-3">
      <p className="text-lg tracking-wider text-red-700">
        Something went wrong. Please refresh again!
      </p>
    </div>
  );
};

export default ReminderContainerError;
