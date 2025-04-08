export const fetchFish = async () => {
    const response = await fetch('/api/v1/fish');
    console.log(response);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des poissons');
    }
    return response.json();
  };
  
  