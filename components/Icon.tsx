"use client";

import { useState } from "react";
import { iconType } from "@/type";

const Icon = ({
  iconOn,
  textOn,
  iconOff,
  bgColour,
}: iconType & { bgColour: string }) => {
  const [IsOn, setIsOn] = useState(false);
  return (
    <div
      className="icon-wrapper p-4 flex flex-col justify-center items-center gap-4 cursor-pointer"
      onClick={() => setIsOn((prev) => !prev)}
    >
      <div
        className={`icon-div w-[10vw] h-[10vw] max-w-20 max-h-20 flex justify-center items-center p-4 rounded-full text-slate-50 transition-[background] ease-in-out duration-300  ${
          IsOn ? `${bgColour}` : "bg-slate-600"
        }`}
      >
        {IsOn ? iconOn : iconOff || iconOn}
      </div>
      <div className="icon-text select-none text-center leading-none text-slate-50 text-[clamp(0.75rem,10vw,1rem)]">
        {textOn}
      </div>
    </div>
  );
};
export default Icon;
