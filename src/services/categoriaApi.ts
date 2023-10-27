interface Categoria {
  name: string
}

export async function getCategory() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL}/category`, {
    method: 'GET',
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Falha ao realizar fetch data')
  }

  const data = await response.json()
  return data
}

export async function postCategory(body: Categoria) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL}/category`, {
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
