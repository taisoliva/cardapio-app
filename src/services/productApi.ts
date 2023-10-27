import { ProductsProtocol } from '@/protocols'

export async function postProducts(body: Omit<ProductsProtocol, 'id'>) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Falha ao realizar fetch data')
  }

  return response
}
