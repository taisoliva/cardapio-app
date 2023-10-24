import { Home } from "lucide-react"

export function Header() {
    return (
        <header className=' w-screen  flex justify-center items-center mb-10 shadow-lg'>
            <Home className="fixed left-0 right-0 m-4 rounded md:h-6 md:w-6 lg:h-10 lg:w-10 text-zinc-700 hover:text-zinc-300 hover:cursor-pointer " />
            <h1 className=' text-zinc-700 font-black text-3xl md:text-5xl lg:text-6x'>
                AU Food
            </h1>
        </header >
    )
}