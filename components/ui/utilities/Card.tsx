import { Fish } from "@prisma/client";

export const Card = (fish:Fish) => {
    console.log(fish)
  return (
    <div className="bottom-0 w-full h-[50px]">
        <p>{fish.name}</p>

    </div>
  );
};
