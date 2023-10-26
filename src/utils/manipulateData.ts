import { Category, Product } from '@/protocols'

interface Menu {
  id: string
  name: string
  type: string
  products: Product[]
}

export function manipulateData(dataMenu: Menu, dataCategory: Category[]) {
  const categoriesProducts: { [key: string]: Product[] } = {}

  dataCategory.forEach((category: Category) => {
    categoriesProducts[category.id] = []
  })

  dataMenu.products.forEach((product) => {
    categoriesProducts[product.categoryId].push(product)
  })

  const organizedMenu: Category[] = dataCategory
    .filter((category) => categoriesProducts[category.id].length > 0)
    .map((category) => ({
      ...category,
      products: categoriesProducts[category.id],
    }))

  return organizedMenu
}
