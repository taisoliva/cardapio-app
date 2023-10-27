interface Menu {
  name: string
  type: string
}

export async function getMenu(query: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL}/menu?type=${query}`,
    {
      method: 'GET',
      cache: 'no-store',
    },
  )

  if (!response.ok) {
    throw new Error('Falha ao realizar fetch data')
  }

  const data = await response.json()
  return data
}

export async function getAllMenus() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL}/menu`, {
    method: 'GET',
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Falha ao realizar fetch data')
  }

  const data = await response.json()
  return data
}

export async function getMenuId(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL}/menu/${id}`, {
    method: 'GET',
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Falha ao realizar fetch data')
  }

  const data = await response.json()
  return data
}

export async function postMenu(body: Menu) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL}/menu`, {
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
