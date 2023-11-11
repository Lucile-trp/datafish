import Image from "next/image"
import { Logo } from "./logo_white"
import Link from "next/link"

export const Header = () => {
    return(
        <header>
            <div className="flex flex-row h-[80px] w-full px-8 items-center justify-between lg:px-32 lg:pt-14 ">
                <div className="flex items-center">
                <Logo className="h-[40px] lg:h-[80px] lg:w-[70px]"></Logo>
                <div className="hidden lg:block lg:h-10 lg:w-[1px] lg:bg-white lg:mx-5"></div>
                <h1 className="text-white font-bold text-2xl">Datafish</h1>
                </div>


                <div>
                    <nav>
                        <ul className="flex flex-row gap-7 text-white">
                            <Link href="/" className="h-6 hover:border-b hover:border-white">Datavisualisation</Link>
                            <Link href="/" className="h-6 hover:border-b hover:border-white">Encyclopédie</Link>
                            <Link href="/" className="h-6 hover:border-b hover:border-white">Informations</Link>
                            <li className="font-bold">Se connecter</li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    )

}