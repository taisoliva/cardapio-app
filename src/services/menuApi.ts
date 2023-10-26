import axios from 'axios'
import api from './api'

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
  const data = await response.json()
  return data
}

export async function getAllMenus() {
  const response = await api.get(`/menu`)
  return response
}

export async function getMenuId(id: string) {
  const response = await api.get(`/menu/${id}`)
  return response
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

  return response
}
