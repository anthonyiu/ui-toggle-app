import { cn } from "@/utils";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

export const colourList = [
  "bg-rose-400",
  "bg-pink-400",
  "bg-amber-400",
  "bg-lime-400",
  "bg-cyan-400",
  "bg-violet-400",
  "random",
];

const Colour = ({
  bgColour,
  setBgColour,
}: {
  bgColour: string;
  setBgColour: (colour: string) => void;
}) => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-4">
        {colourList.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                const randomColour =
                  colourList[
                    Math.floor(Math.random() * (colourList.length - 1))
                  ];
                // console.log(randomColour);
                setBgColour(
                  index === colourList.length - 1 ? randomColour : item
                );
              }}
              className={cn(
                "transition-[border]",
                `w-12 h-12 p-2 rounded-full border-4 border-solid border-slate-500 hover:border-slate-100 cursor-pointer text-white flex justify-center items-center`,
                item,
                bgColour === item && "border-slate-100"
              )}
            >
              {index === colourList.length - 1 && (
                <GiPerspectiveDiceSixFacesRandom className="w-full h-full" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Colour;
