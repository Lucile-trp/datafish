import { getOneFish } from "@/lib/fetchers/fishFetcher";
import { notFound } from "next/navigation";

export default async function FishSheet(props: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const fish = await getOneFish(id);
  if (!fish) {
    notFound();
  }
  return (
    <div className="grid min-h-screen">
      <main className="mt-32 mx-32">
        <h1>{fish?.commun_name}</h1>
        <pre className="p-4 rounded-md text-sm overflow-x-auto">
          {JSON.stringify(fish, null, 2)}
        </pre>
      </main>
    </div>
  );
}
