import { Fish } from "@/types/Fish";
import Link from "next/link";

export const Card: React.FC<Fish> = (fish: Fish) => {
  return (
    <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-4 w-full h-full transition hover:scale-[1.02] hover:shadow-2xl duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-white mb-2">
        {fish.commun_name}
      </h3>
      <p className="text-sm text-white/80 italic mb-4">
        {fish.scientific_name}
      </p>
      <Link
        href={`/poisson/${fish.metadata.id}`}
        className="text-sm text-cyan-300 hover:underline"
      >
        Voir plus...
      </Link>
    </div>
  );
};
