export type MenuProtocol = {
    id: string,
    name: string,
    type: 'diurno' | 'noturno'
    product: [Object]
}

export type CategoryProtocol = {
    id: string,
    name: string,
    product: [Object]
}

export type ProductsProtocol = {
    id: string
    name: string
    price: string
    image: string
    description: string
    menuId: string
    categoryId: string
}

