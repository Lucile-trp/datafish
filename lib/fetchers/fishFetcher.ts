import { IFish } from "@/models/Fish.model";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
/**
 * Get all fish with api
 * @returns
 */
export const fetchFish = async (): Promise<IFish[]> => {
  const response = await fetch(`${baseUrl}/api/v1/fish`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des poissons");
  }
  return response.json();
};

export const countFishes = async (): Promise<{
  success: boolean;
  total?: number;
  error?: string;
}> => {
  const response = await fetch(`${baseUrl}/api/v1/fish/count`);
  if (!response.ok) {
    throw new Error("Erreur lors du comptage des poissons");
  }
  return response.json();
};

export const getOneFish = async (id: string): Promise<IFish | null> => {
  const response = await fetch(`${baseUrl}/api/v1/fish/${id}`);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des informations.");
  }
  return response.json();
};
