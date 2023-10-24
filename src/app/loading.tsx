import { PlusCircle } from "lucide-react";

export default function Loading() {
    const tags = ['Criar um Novo Cardápio', 'Criar uma Nova Categoria', 'Criar um Novo Produto']
    return (
        <aside className="m-auto w-4/5 justify-between lg:flex lg:flex-row ">
            {
                tags.map((item, index) => (
                    <div key={index} className="flex items-center border-2 rounded  animate-pulse
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
                        <div className="h-2 bg-slate-700 rounded w-40 "></div>
                    </div>
                ))
            }

        </aside>
    )
    
}