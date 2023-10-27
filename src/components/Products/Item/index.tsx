import { Product } from '@/protocols'

export default function ItemProduct({
  id,
  name,
  image,
  price,
  description,
}: Omit<Product, 'menuId' | 'categoryId'>) {
  return (
    <div
      key={id}
      className="flex w-4/5 md:w-96 lg:w-96 mr-4 rounded  mb-4 border-2 border-slate-500 shadow-lg transform scale-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:shadow-cyan-500/50"
    >
      <>
        <img
          className="w-1/2 h-48 md:w-48 lg:w-48 p-2 border-2 rounded"
          src={image}
        />
        <div className="flex flex-col w-full ml-2 items-center justify-center ">
          <p className="text-sm mb-1  md:text-xl ">{name} </p>
          <p className="text-xs text-center mb-1">{description}</p>
          <p className="text-sm">{`R$ ${(price / 100).toFixed(2)}`} </p>
        </div>
      </>
    </div>
  )
}
