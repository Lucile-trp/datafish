import { Fish } from "@prisma/client";

export const Card = (fish: Fish) => {
  console.log(fish);
  return (
    <div className="rounded border border-white/20 p-4 hover:border-white cursor-pointer">
      <h3 className="text-white text-2xl">{fish.name}</h3>
      <p className="text-white italic">{fish.vernacular_name || 'N/A'}</p>
    </div>
  );
};
