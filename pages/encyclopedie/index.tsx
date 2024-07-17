import { Card } from "@/components/ui/utilities/Card";
import { Fish } from "@prisma/client";
import { useEffect, useState } from "react";

export default function MainPageEncyclopedie() {
  const [FishData, setFishData] = useState<Fish[]>([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("/api/fish/all")
      .then((d) => d.json())
      .then((d) => setFishData(d));
  }

  return (
    <section>
      <h1 className="text-white text-4xl">Encyclopédie</h1>
      <div className="grid lg:grid-cols-3 gap-5 pt-3">
        {FishData.length < 1 || FishData == undefined ? (
          <p className="text-white italic">Chargement...</p>
        ) : (
          FishData.map((fish, i) => <Card key={i} {...fish}></Card>)
        )}
      </div>
    </section>
  );
}
