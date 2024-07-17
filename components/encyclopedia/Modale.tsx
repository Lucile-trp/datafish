import { Fish } from "@prisma/client";
import Link from "next/link";

export const Modale = (selectedFish: Fish) => {
  return (
    <div className="absolute text-white bottom-0 right-0 z-20 w-full p-4 mb-14 bg-white/10 shadow-sm border border-white/20 md:max-w-2xl md:max-h-[32rem] lg:max-w-4xl md:rounded-tl-md hover:bg-white/80 hover:text-black transition-colors">
      {/* HEAD */}
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-2xl">{selectedFish.name}</h5>
          <p className="italic text-sm">
            {selectedFish.vernacular_name || "Non renseigné"}
          </p>
        </div>

        <Link href={"/encyclopedie/" + selectedFish.id} className="italic">
          Voir la fiche...
        </Link>
      </div>

      <div className="divider-solid w-1/3 h-[1px] my-2"></div>

      {/* BODY */}
      <p> {selectedFish.description || "Pas de description disponible"}</p>
    </div>
  );
};
