export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-150px)]">
      <main className="flex flex-col gap-8 items-center">
        <div className="grid grid-cols-2">
          <div className="">
            <h1 className="text-2xl pl-20 italic">
              Datafish - Un observatoire de la faune aquatique.
            </h1>
            <div className="border-0.5 border-b my-6 max-w-96"></div>
            <p className="pl-20">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam.
            </p>
          </div>
        </div>
        {/* ILLUSTRATION ICI */}
        <div className="bg-black/50 w-full h-full">
          <p></p>
        </div>
        <div className="absolute bottom-10  right-10 border border-white rounded-3xl p-4 ">
          <p>
            <span className="italic">1000</span> poissons renseignés
          </p>
        </div>
      </main>
    </div>
  );
}
