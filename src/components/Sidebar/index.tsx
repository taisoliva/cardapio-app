import { PlusCircle } from "lucide-react";

export function Sidebar() {
    const tags = ['Criar um Novo Cardápio', 'Criar uma Nova Categoria', 'Criar um Novo Produto']
    return (
        <aside className="m-auto w-4/5 justify-between lg:flex lg:flex-row">
            {
                tags.map((item, index) => (
                    <div key={index} className="flex border-2 rounded 
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
                        <p> {item} </p>
                    </div>
                ))
            }

        </aside>
    )
}