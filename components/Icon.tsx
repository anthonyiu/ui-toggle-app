"use client";

import { useState } from "react";
import { iconType } from "@/type";
import { cn } from "@/utils";

export const animation = ["animate-spin", "animate-bounce"];

const Icon = ({
  iconOn,
  textOn,
  iconOff,
  bgColour,
}: iconType & { bgColour: string }) => {
  const [IsOn, setIsOn] = useState(true);
  return (
    <div
      className="icon-wrapper p-4 flex flex-col justify-center items-center gap-4 cursor-pointer"
      onClick={() => setIsOn((prev) => !prev)}
    >
      <div
        className={cn(
          "icon-div w-[12vw] h-[12vw] max-w-20 max-h-20 flex justify-center items-center p-3 sm:p-4 md:p-5 rounded-full text-slate-50 transition-[background] ease-in-out duration-300",
          IsOn ? bgColour : "bg-slate-600",
          IsOn && animation[Math.floor(Math.random() * animation.length)]
        )}
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
