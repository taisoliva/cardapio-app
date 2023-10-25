'use client'

import { postMenu } from "@/services/menuApi";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import axios from "axios";
import { useState, FormEvent } from "react";


interface Options {
    diurno: boolean;
    noturno: boolean;
}


export default function FormMenu() {

    const [name, setName] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState<string>('diurno')
    const [isError, setError] = useState<boolean>(false)

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
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
            type: selectedOption
        }

        try {
            const promise = await postMenu(body)
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
            <div className="mt-2 ">
                <FormControl>
                    <FormLabel> Escolha a opção de horário </FormLabel>
                    <div className="flex">
                        <RadioGroup row aria-labelledby="demo-radio-buttons-group-label" defaultValue="diurno" name="radio-buttons-group"
                            value={selectedOption} onChange={handleOptionChange}>
                            <FormControlLabel value="diurno" control={<Radio />} label="Diurno" />
                            <FormControlLabel value="noturno" control={<Radio />} label="Noturno" />
                        </RadioGroup>
                    </div>
                </FormControl>
            </div>

            <div className="flex mt-2 p-1">
                <Button style={{ marginRight: '20px', backgroundColor: 'black' }} variant="contained">Cancelar</Button>
                <Button variant="outlined" type="submit">Salvar</Button>
            </div>
        </form>
    )
}