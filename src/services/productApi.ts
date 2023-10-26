import { ProductsProtocol } from "@/protocols";
import axios from "axios";

export async function postProducts(body: Omit<ProductsProtocol, 'id'>) {
    console.log(body)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL}/products`, body, {
        headers: {
            'Content-Type': 'application/json', // Certifique-se de definir o tipo de conteúdo como JSON se você estiver enviando dados JSON
            // ... outras informações de cabeçalho, se necessário
        },
    }
    );
   
    return response

}
