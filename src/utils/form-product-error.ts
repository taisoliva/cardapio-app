import { ProductsProtocol } from '@/protocols'

type ArrayError = string[]

export function fieldsEmpty(body: Omit<ProductsProtocol, 'id'>) {
  const array = []

  for (const key in body) {
    if (body[key] === '') {
      array.push(key)
    }
  }

  return array
}
