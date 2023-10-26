import { Product } from "@/protocols";

export default function ItemProduct({ id, name, image, price, description } : Omit<Product, 'menuId' | 'categoryId' >) {
    return (
        <div key={id} className="flex w-96 mr-4 rounded  mb-4 border-2 border-slate-500 shadow-lg transform scale-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:shadow-cyan-500/50">
            <>
                <img className="w-48 p-2 border-2 rounded" src={image} />
                <div className="flex flex-col w-full ml-2 items-center justify-center ">
                    <p>{name} </p>
                    <p className="text-center">{description}</p>
                    <p>{`R$ ${(price / 100).toFixed(2)}`} </p>
                </div>
            </>
        </div>
    )


}