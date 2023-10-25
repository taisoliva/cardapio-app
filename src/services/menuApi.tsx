import axios from 'axios'
import api from './api'

export async function getMenu(type:string) {
    const response = await api.get(`/menu?type=${type}`)
    return response
}

export async function getMenuId(id: string) {
    const response = await api.get(`/menu/${id}`)
    return response
}

export async function postMenu(body : Menu) {

    const response = await api.post(`/menu`, body)
    return response
}

interface Menu {
    name: string,
    type: string
}