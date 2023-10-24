import api from './api'

export async function getMenu(type:string) {
    const response = await api.get(`/menu?type=${type}`)
    return response
}