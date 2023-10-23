import { Home } from "lucide-react"

export function Header() {
    return (
        <header className='fixed w-screen z-auto flex justify-center items-center bg-red-700 shadow-lg'>
            <Home className="fixed left-0 right-0 m-4 rounded md:h-6 md:w-6 lg:h-10 lg:w-10 text-zinc-200 hover:text-zinc-300 hover:cursor-pointer " />
            <h1 className=' text-zinc-200 font-black text-3xl md:text-5xl lg:text-6x'>
                AU Food
            </h1>
        </header >
    )
}