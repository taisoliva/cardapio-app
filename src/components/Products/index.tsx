'use client'

import { Product } from '@/protocols'
import ItemProduct from './Item'
import React, { useState } from 'react'
import Modal from './Modal'

interface Category {
  id: string
  name: string
  products: Product[]
}

export default function Products({ data }: { data: Category[] }) {
  const [click, setClick] = useState<boolean>(false)
  const [selectProduct, setSelectProduct] = useState<Product | undefined>()

  function handleProduct(product: Product) {
    setClick(!click)
    setSelectProduct(product)
  }

  return (
    <div>
      <div className={`w-full mt-4 ${click ? 'opacity-10' : ''}`}>
        {data.map((item) => (
          <div key={item.id}>
            <p className="border-b-2 mb-3 font-medium ">{item.name}</p>
            <div className=" flex flex-wrap justify-center ">
              {item.products.map((product) => (
                <div
                  key={product.id}
                  className=""
                  onClick={() => {
                    handleProduct(product)
                  }}
                >
                  <ItemProduct
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {click && <Modal selectProduct={selectProduct} setClick={setClick} />}
    </div>
  )
}
