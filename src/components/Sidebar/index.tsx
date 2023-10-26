import { PlusCircle } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
    const tags = [{ id: 'menu', name: 'Criar um Novo Cardápio' }, { id: 'categoria', name: 'Criar uma Nova Categoria' }, { id: 'categoria', name: 'Criar um Novo Produto' }]
    return (
        <aside className="justify-between lg:flex lg:flex-row">
            {
                tags.map((item, index) => (
                    <Link key={index} href={`/criar`}>
                        <div  className="flex border-2 rounded 
                            text-black
                            border-slate-800 
                            hover:border-slate-500 
                            hover:cursor-pointer 
                            hover:text-slate-700
                            font-sans 
                            font-medium 
                            p-4
                            mb-2">
                            <PlusCircle className="mr-2" />
                            <p> {item.name} </p>
                        </div>
                    </Link>
                ))
            }

        </aside>
    )
}