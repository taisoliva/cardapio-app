import { ProductsProtocol } from '@/protocols'

export function fieldsEmpty(body: Omit<ProductsProtocol, 'id'>) {
  const array = []

  for (const i in body) {
    // @ts-expect-error se os elementos do body são vazios, estou acessando pela chave
    if (body[i] === '') {
      array.push(i)
    }
  }

  return array
}
