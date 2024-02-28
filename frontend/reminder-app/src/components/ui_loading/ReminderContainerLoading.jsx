import React from "react";

const ReminderContainerLoading = () => {
  return (
    <div
      className="flex max-h-[68vh] flex-row flex-wrap items-center justify-center 
    gap-10 overflow-x-hidden overflow-y-hidden 
    pb-10 pr-16 pt-3 max-md:max-h-max max-md:overflow-hidden max-md:px-2 "
    >
      {[...Array(8).keys()].map((i) => (
        <div
          key={i}
          className="h-20 w-[40%] min-w-[200px] grow animate-pulse rounded-xl bg-gray-200 "
          style={{
            animationDelay: `${i * 0.02}s`,
            animationDuration: "1s",
            animationDirection: "alternate",
          }}
        />
      ))}
    </div>
  );
};

export default ReminderContainerLoading;
