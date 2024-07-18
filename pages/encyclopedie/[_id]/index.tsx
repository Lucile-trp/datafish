import { Fish } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";


// On récupère l'ID qui est dans les paramètres de la route
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { _id: ctx.query._id } };
};

export default function FishDetailPage({ _id }: { _id: string }) {
  const [id] = useState(_id);
  const [fish, setFish] = useState<Fish | null>(null)

  useEffect(() => {
    getData();
    console.log(fish)
    
  }, )

  async function getData() {
    await fetch("/api/fish/" + id)
      .then((d) => d.json())
      .then((d) => setFish(d));
  }

  return (
    <>
    <h1 className="title">{fish?.name || "Unknown"}</h1>
    <pre className="text-white ">{JSON.stringify(fish, null, 2)} </pre>
    </>
  );
}
