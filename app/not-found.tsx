import BubblesBackground from "@/components/UI/Background_bubbles"
import Link from "next/link"

export default function NotFound() {

  return (
    <div className="min-h-screen w-full bg-[#001529] text-white flex flex-col relative overflow-hidden">
        <BubblesBackground></BubblesBackground>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-20 flex flex-col items-start justify-center flex-grow relative">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-6 text-white">404</h1>
          <p className="text-2xl font-medium mb-8 text-blue-100">
            Vous semblez être perdu dans les abysses... Des créatures dangereuses y rôdent🐙
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r border border-white/50 from-white/20 to-white/5 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 inline-flex items-center"
          >
            Retourner en lieu sûr
          </Link>
        </div>
      </div>
    </div>
  )
}

