import { Product } from "@/protocols"
import { XSquare } from 'lucide-react';

export default function Modal({selectProduct, setClick} : { selectProduct?: Product, setClick:(value: boolean) => void }) {

    function handleOrder(produto?: Product){
        let texto = `Olá gostaria de fazer o seguinte Pedido: ${produto?.name}`
        texto = window.encodeURIComponent(texto);
        window.open(" https://wa.me/5524981494288?text=" + texto);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center" >
            <div className="flex flex-col  bg-blue-300 w-1/2 h-1/2 shadow-2xl rounded-lg shadow-black  ">
                <div className="flex w-full justify-end p-1 text-red-600 hover:cursor-pointer" onClick={() => { setClick(false) }}> <XSquare /> </div>
                <div className="h-4/5 p-1 flex">
                    <img className="w-1/2 h-full rounded border-2" src={selectProduct?.image} />
                    <div className="flex flex-col justify-center items-center w-full">
                        <p> {selectProduct?.name}</p>
                        <p> {selectProduct?.description}</p>
                        <p> {selectProduct?.price}</p>

                    </div>
                </div>
                <div className="flex justify-center items-center w-full mt-2 ">
                    <button onClick={() => {handleOrder(selectProduct)}}  className="bg-green-400 w-40 h-10 rounded-3xl hover:cursor-pointer hover:bg-green-300 "> Pedir </button>
                </div>
            </div>
        </div>
    )
}