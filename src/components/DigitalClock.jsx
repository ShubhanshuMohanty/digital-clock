import React, { useEffect, useState } from "react";

function DigitalClock({ mirror = false }) {
  const [time, setTime] = useState();
  useEffect(() => {
    const timerID = setInterval(() => {
      const formattedTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formattedTime);
    }, 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <div
      className={`p-[3px] inline-block max-w-fit max-h-fit  ${
        mirror
          ? ""
          : "border bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      }`}
    >
      <div className={` bg-white dark:bg-customDark dark:shadow-green-radial dark:text-white text-3xl font-bold  py-[100px] px-[200px] ${mirror? "transform scale-y-[-1] opacity-50 blur-[1px]  text-opacity-70 mt-2":""}`}>{time}</div>
    </div>
  );
}

export default DigitalClock;
