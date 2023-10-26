import { PlusCircle } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
    return (
        <aside className="justify-between lg:flex lg:flex-row">
            <Link href={`/criar`}>
                <div className="flex border-2 rounded 
                            text-black
                            border-slate-800 
                            hover:border-zinc-700 
                            hover:cursor-pointer 
                            hover:text-slate-900
                            hover:shadow-lg 
                            hover:shadow-zinc-500/50
                            font-sans 
                            font-medium 
                            p-4
                            mb-2">
                    <PlusCircle className="mr-2" />
                    <p> Criar um Novo </p>
                </div>
            </Link>
        </aside>
    )
}