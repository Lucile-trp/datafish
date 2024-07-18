import { Modale } from "@/components/encyclopedia/Modale";
import { Card } from "@/components/ui/utilities/Card";
import { Fish } from "@prisma/client";
import { useEffect, useState } from "react";

export default function MainPageEncyclopedie() {
  const [FishData, setFishData] = useState<Fish[]>([]);
  const [selectedFish, setSelectedFish] = useState<Fish | null>(null);
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
      <h1 className="title">Encyclopédie</h1>

      <div className="divider-solid w-1/3 m-2"></div>
      
      <div className="grid lg:grid-cols-3 gap-5 pt-3">
        {FishData.length < 1 || FishData == undefined ? (
          <p className="text-white italic">Chargement...</p>
        ) : (
          FishData.map((fish, i) => <Card key={fish.id} fish={fish} selectedFish={selectedFish} setSelectedFish={setSelectedFish} ></Card>)
        )}
      </div>

      {
        selectedFish ? (<Modale {...selectedFish}></Modale>) : <></>
      }
    </section>
  );
}
