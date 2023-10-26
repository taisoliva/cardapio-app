'use client'

import { postCategory } from "@/services/categoriaApi";
import { postMenu } from "@/services/menuApi";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState, FormEvent } from "react";


interface Options {
    diurno: boolean;
    noturno: boolean;
}


export default function FormCategoria() {

    const [name, setName] = useState<string>('')
    const [isError, setError] = useState<boolean>(false)

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (name === '') {
            setError(true)
        } else {

            setError(false)
        }

        const body = {
            name,
        }

        try {
            const promise = await postCategory(body)
            console.log(promise)
        } catch (error) {

            console.log("deu ruim", error)
        }
    };

    return (
        <form className="m-5" onSubmit={handleSubmit}>
            <TextField style={{ width: '100%' }} name='title' label="Nome do Cardápio" type="text" variant="outlined" value={name} onChange={handleNameChange}
                error={isError}
                helperText={isError && "Preencha com o nome"} />

            <div className="flex mt-2 p-1">
                <Button style={{ marginRight: '20px', backgroundColor: 'black' }} variant="contained">Cancelar</Button>
                <Button variant="outlined" type="submit">Salvar</Button>
            </div>
        </form>
    )
}