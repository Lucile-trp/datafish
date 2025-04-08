"use client";

import { fetchFish } from "@/lib/fetchers/fishFetcher";
import { Fish } from "@/types/Fish";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { escapeHtmlEntities } from "@/lib/helpers/escapeHtmlEntities";

export const HomeEncyclopedia: React.FC = () => {
  const [fish, setFish] = useState<Fish[]>([]);

  useEffect(() => {
    fetchFish().then((data) => setFish(data.data));
  }, []);
  return (
    <>
      <h1
        className="text-2xl pb-2"
        dangerouslySetInnerHTML={{
          __html: escapeHtmlEntities("L'Encyclopédie"),
        }}
      ></h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {fish.map((f) => {
          return <Card key={f.metadata.id} {...f} />;
        })}
      </div>
    </>
  );
};
