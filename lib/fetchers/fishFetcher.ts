export const fetchFish = async () => {
  const response = await fetch("/api/v1/fish");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des poissons");
  }
  return response.json();
};

export const countFishes = async () => {
  const response = await fetch("/api/v1/fish/count");
  if (!response.ok) {
    throw new Error("Erreur lors du comptage des poissons");
  }
  return response.json();
};
