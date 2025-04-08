"use client"
import { countFishes } from "@/lib/fetchers/fishFetcher";
import { useEffect, useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    countFishes().then((data) => setCount(data.total));
  }, []);
  return (
    <div className="absolute bottom-10 right-24 border border-white rounded-3xl p-4 ">
      <p>
        <span className="italic">{count.toString()}</span> poissons renseignés
      </p>
    </div>
  );
};
