import api from './api'

export async function getMenu(type:string) {
    const response = await api.get(`/menu?type=${type}`)
    return response
}

export async function getMenuId(id: string) {
    const response = await api.get(`/menu/${id}`)
    return response
}