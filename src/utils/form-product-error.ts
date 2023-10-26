import { ProductsProtocol } from '@/protocols'

export function fieldsEmpty(body: Omit<ProductsProtocol, 'id'>) {
  const array = []

  for (const key in body) {
    if (body[key] === '') {
      array.push(key)
    }
  }

  return array
}
