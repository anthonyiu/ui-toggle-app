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
    <div className="sticky top-0 py-4 bg-slate-800/80 z-50">
      <ul className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4">
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
                `w-[10vw] h-[10vw] max-w-12 max-h-12 p-2 rounded-full border-solid hover:border-slate-100 hover:border-4 cursor-pointer text-white flex justify-center items-center`,
                item,
                bgColour === item && "border-slate-100 border-4"
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
