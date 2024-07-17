import { Fish } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export const Card = ({
  fish,
  selectedFish,
  setSelectedFish,
}: {
  fish: Fish;
  selectedFish: Fish | null;
  setSelectedFish: Dispatch<SetStateAction<Fish | null>>;
}) => {
  function CardClickAction(e: Fish) {
    e == selectedFish ? setSelectedFish(null) : setSelectedFish(e);
  }

  return (
    <div
      className="rounded border border-white/20 p-4 hover:border-white cursor-pointer"
      onClick={() => CardClickAction(fish)}
    >
      <h3 className="text-white text-2xl">{fish.name}</h3>
      <p className="text-white italic">{fish.vernacular_name || "N/A"}</p>
    </div>
  );
};
