'use client'

import { ProductsProtocol } from "@/protocols";
import { postProducts } from "@/services/productApi";
import { fieldsEmpty } from "@/utils/form-product-error";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormEvent } from "react";

export const handleSubmit = async (event: FormEvent<HTMLFormElement>, router:AppRouterInstance ,body: Omit<ProductsProtocol, 'id'>, 
setNameError: (value: boolean) => void , setPriceError: (value: boolean) => void ,setImageError: (value: boolean) => void , 
setDescriptionError: (value: boolean) => void, setMenuError: (value: boolean) => void, setCategoryError: (value: boolean) => void, setDisabled :(value: boolean) => void) => {
   
    event.preventDefault();
    setDisabled(true)

    const array = fieldsEmpty(body)

    if (array.length !== 0) {
        setNameError(array.includes('name'))
        setPriceError(array.includes('price'))
        setImageError(array.includes('image'))
        setDescriptionError(array.includes('description'))
        setMenuError(array.includes('menuId'))
        setCategoryError(array.includes('categoryId'))
        setDisabled(false)
    } else {
    
        body.price = parseInt((body.price).replace(".", ""), 10);
        try {
            console.log('entrei', body)
            const response = await postProducts(body)
            setDisabled(false)
            router.push('/')
           
        } catch (error) {
            console.log(error)
            setDisabled(false)
        }
    }
    
};