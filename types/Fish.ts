export type Fish = {
  metadata: {
    id: string;
    created_at: Date;
    updated_at?: Date | null;
  };

  // MAIN INFORMATIONS
  commun_name: string;
  scientific_name: string;
  alternative_names?: string[];
  created_by: string;
  updated_by?: string | null;
  status: string; // Status of the post
  picture?: string | null;
  description: string;

  // TAXONOMY
  classification: {
    domain: string;
    kingdom: string;
    subkingdom?: string | null;
    infrakingdom?: string | null;
    phylum: string;
    subphylum?: string | null;
    class: string;
    order: string;
    family: string;
    subfamily?: string | null;
    genus: string;
    species: string;
  };

  // STATUS
  UICN_status: string;

  //LOCALISATION & ENVIRONNEMENT
  water_type: string;
  depth_range: { min: number; max: number };
  temperature_range: { min: number; max: number };
  pH_range: { min: number; max: number };

  //PHYSICAL
  length_range: { min: number; max: number };
  height_range: { min: number; max: number };

  //LIFESTYLE
  venoumous: boolean;
  gestation: number;
  diet: string;
  lifespan: number;

  //
  behavior: {
    activity_period: string;
    sociability: string;
    temperament: string;
    schooling: string; //Vit en banc ?
  };

  // AQUARIOPHILY
  difficulty: string;
  compatibility: string[];
};
