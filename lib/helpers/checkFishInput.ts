import { IFish } from "@/models/Fish.model";

/**
 * Vérifie que toutes les propriétés requises d'un objet IFish sont renseignées.
 * @param data Objet partiel à vérifier
 * @returns Tableau des champs manquants (vide si tout est OK)
 */
export function getMissingRequiredFishFields(data: Partial<IFish>): string[] {
  const requiredFields = [
    "commun_name",
    "scientific_name",
    "created_by",
    "status",
    "description",
    "classification",
    "UICN_status",
    "water_type",
    "depth_range",
    "temperature_range",
    "pH_range",
    "length_range",
    "height_range",
    "venoumous",
    "gestation",
    "diet",
    "lifespan",
    "behavior",
    "difficulty",
    "compatibility",
  ];

  const missing: string[] = [];

  for (const field of requiredFields) {
    if (
      data[field as keyof IFish] === undefined ||
      data[field as keyof IFish] === null
    ) {
      missing.push(field);
    }
  }

  // Vérification des sous-champs pour les objets imbriqués
  if (data.classification) {
    const classif = data.classification as any;
    [
      "domain",
      "kingdom",
      "phylum",
      "class",
      "order",
      "family",
      "genus",
      "species",
    ].forEach((key) => {
      if (!classif[key]) missing.push(`classification.${key}`);
    });
  } else {
    missing.push("classification");
  }

  if (data.depth_range) {
    if (data.depth_range.min === undefined) missing.push("depth_range.min");
    if (data.depth_range.max === undefined) missing.push("depth_range.max");
  } else {
    missing.push("depth_range");
  }

  if (data.temperature_range) {
    if (data.temperature_range.min === undefined) missing.push("temperature_range.min");
    if (data.temperature_range.max === undefined) missing.push("temperature_range.max");
  } else {
    missing.push("temperature_range");
  }

  if (data.pH_range) {
    if (data.pH_range.min === undefined) missing.push("pH_range.min");
    if (data.pH_range.max === undefined) missing.push("pH_range.max");
  } else {
    missing.push("pH_range");
  }

  if (data.length_range) {
    if (data.length_range.min === undefined) missing.push("length_range.min");
    if (data.length_range.max === undefined) missing.push("length_range.max");
  } else {
    missing.push("length_range");
  }

  if (data.height_range) {
    if (data.height_range.min === undefined) missing.push("height_range.min");
    if (data.height_range.max === undefined) missing.push("height_range.max");
  } else {
    missing.push("height_range");
  }

  if (data.behavior) {
    const beh = data.behavior as any;
    ["activity_period", "sociability", "temperament", "schooling"].forEach((key) => {
      if (!beh[key]) missing.push(`behavior.${key}`);
    });
  } else {
    missing.push("behavior");
  }

  return missing;
}