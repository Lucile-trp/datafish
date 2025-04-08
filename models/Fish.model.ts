import mongoose, { Schema, Document } from 'mongoose';

export interface IFish extends Document {
  metadata: {
    id: string;
    created_at: Date;
    updated_at?: Date | null;
    version: number;
  };

  commun_name: string;
  scientific_name: string;
  alternative_names?: string[];
  created_by: string;
  updated_by?: string | null;
  status: string;
  picture?: string | null;
  description: string;

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

  UICN_status: string;

  water_type: string;
  depth_range: { min: number; max: number };
  temperature_range: { min: number; max: number };
  pH_range: { min: number; max: number };

  length_range: { min: number; max: number };
  height_range: { min: number; max: number };

  venoumous: boolean;
  gestation: number;
  diet: string;
  lifespan: number;

  behavior: {
    activity_period: string;
    sociability: string;
    temperament: string;
    schooling: string;
  };

  difficulty: string;
  compatibility: string[];
}

const FishSchema: Schema = new Schema({
  metadata: {
    id: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    version: { type: Number, required: true },
  },

  commun_name: { type: String, required: true },
  scientific_name: { type: String, required: true },
  alternative_names: [{ type: String }],
  created_by: { type: String, required: true },
  updated_by: { type: String, default: null },
  status: { type: String, required: true },
  picture: { type: String, default: null },
  description: { type: String, required: true },

  classification: {
    domain: { type: String, required: true },
    kingdom: { type: String, required: true },
    subkingdom: { type: String, default: null },
    infrakingdom: { type: String, default: null },
    phylum: { type: String, required: true },
    subphylum: { type: String, default: null },
    class: { type: String, required: true },
    order: { type: String, required: true },
    family: { type: String, required: true },
    subfamily: { type: String, default: null },
    genus: { type: String, required: true },
    species: { type: String, required: true },
  },

  UICN_status: { type: String, required: true },

  water_type: { type: String, required: true },
  depth_range: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
  },
  temperature_range: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
  },
  pH_range: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
  },

  length_range: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
  },
  height_range: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
  },

  venoumous: { type: Boolean, required: true },
  gestation: { type: Number, required: true },
  diet: { type: String, required: true },
  lifespan: { type: Number, required: true },

  behavior: {
    activity_period: { type: String, required: true },
    sociability: { type: String, required: true },
    temperament: { type: String, required: true },
    schooling: { type: String, required: true },
  },

  difficulty: { type: String, required: true },
  compatibility: [{ type: String }],
});

export default mongoose.model<IFish>('Fish', FishSchema);
