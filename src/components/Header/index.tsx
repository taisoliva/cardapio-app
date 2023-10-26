import { Home } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className=" w-screen  flex justify-center items-center mb-10 shadow-lg bg-orange-600">
      <Link href={'/'}>
        <Home className="fixed -top-3 left-0 right-0 m-4 rounded md:h-6 md:w-6 lg:h-10 lg:w-10 text-zinc-50 hover:text-zinc-300 hover:cursor-pointer " />
      </Link>
      <h1 className=" text-zinc-50 font-black text-3xl md:text-5xl lg:text-6x">
        AU Food
      </h1>
    </header>
  )
}
