"use client";

import { iconList } from "@/constant";
import Icon from "@/components/Icon";
import Colour, { colourList } from "@/components/Colour";
import { useState } from "react";

export default function Home() {
  const [bgColour, setBgColour] = useState(colourList[0]);
  return (
    <main className="w-full min-h-screen">
      <Colour bgColour={bgColour} setBgColour={setBgColour} />
      <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-8 p-24">
        {iconList.map((item, index) => {
          return <Icon key={index} {...item} bgColour={bgColour} />;
        })}
      </div>
    </main>
  );
}
