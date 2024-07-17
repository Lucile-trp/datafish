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

      {FishData.map((fish, i) => (
        <Card key={i} {...fish}></Card>
      ))}
    </section>
  );
}
