import Fish from "@/models/Fish.model";
import connectDB from "../database/useDatabase";

/**
 * Vérifie si un poisson existe déjà en base selon son nom commun et scientifique.
 * @param commun_name Nom commun du poisson
 * @param scientific_name Nom scientifique du poisson
 * @returns true si le poisson existe déjà, false sinon
 */
export async function checkUniqueFish(
  commun_name: string,
  scientific_name: string
): Promise<boolean> {
  await connectDB();
  const existing = await Fish.findOne({
    commun_name: commun_name,
    scientific_name: scientific_name,
  });
  return !!existing;
}
