'use client'

import { MenuProtocol } from '@/protocols'
import './style.css'
import Link from 'next/link'

interface Props {
    data: [MenuProtocol]
}

export function Menu(props: Props) {

    return (
        <div className=" m-auto mt-10 w-4/5 p-3 border-2 border-zinc-500 rounded shadow-lg shadow-stone-500">
            <p className="mt-4 text-center md:text-5xl lg:text-6x ">
                Cardápios disponíveis para seu horário
            </p>

            <div className=" flex flex-wrap m-auto mt-10 w-4/5 ">
                {(props.data).map((item: MenuProtocol) => (
                    <Link key={item.id} href={`/menu/${item.id}`}>
                        <div className="w-40 h-40 flex justify-center items-center transition ease-in-out delay-150 border shadow-md rounded-md hover:-translate-y-1 hover:scale-110 hover:shadow-cyan-500/50 duration-300 hover:cursor-pointer">
                            <p> {item.name} </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}