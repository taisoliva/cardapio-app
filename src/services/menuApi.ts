import axios from 'axios'
import api from './api'

export async function getMenu(type: string) {
    const response = await api.get(`/menu?type=${type}`)
    return response
}

export async function getMenuId(id: string) {
    const response = await api.get(`/menu/${id}`)
    return response
}

export async function postMenu(body: Menu) {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/menu`, body, {
        headers: {
            'Content-Type': 'application/json', // Certifique-se de definir o tipo de conteúdo como JSON se você estiver enviando dados JSON
            // ... outras informações de cabeçalho, se necessário
        },
    }
    );
   
    return response

}

interface Menu {
    name: string,
    type: string
}