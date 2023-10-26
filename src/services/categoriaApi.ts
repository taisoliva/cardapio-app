import axios from 'axios';
import api from './api'

export async function getCategory() {
    const response = await api.get(`/category`)
    return response
}

export async function postCategory(body: Categoria) {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/category`, body, {
        headers: {
            'Content-Type': 'application/json', // Certifique-se de definir o tipo de conteúdo como JSON se você estiver enviando dados JSON
            // ... outras informações de cabeçalho, se necessário
        },
    }
    );
   
    return response

}

interface Categoria {
    name: string,
}