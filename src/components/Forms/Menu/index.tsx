'use client'

import { postMenu } from '@/services/menuApi'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import { useState, FormEvent } from 'react'
import Buttons from '../Buttons'
import 'react-toastify/dist/ReactToastify.css'

import { MenuProtocol } from '@/protocols'

export default function FormMenu({
  setCurrentTab,
  menuData,
  setMenuData,
}: {
  setCurrentTab: (value: string) => void
  menuData: MenuProtocol[]
  setMenuData: React.Dispatch<React.SetStateAction<MenuProtocol[]>>
}) {
  const [name, setName] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('diurno')
  const [isError, setError] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDisabled(true)

    if (name === '') {
      setError(true)
      setDisabled(false)
    } else {
      setError(false)
      const body = {
        name,
        type: selectedOption,
      }

      const promise = await postMenu(body)
      if (promise.ok) {
        const newMenu: MenuProtocol = await promise.json()
        menuData.push(newMenu)
        setMenuData(menuData)
        setCurrentTab('tab2')
        setDisabled(false)
      } else {
        setDisabled(false)
        alert('Não foi possível criar o Menu')
      }
    }
  }

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <TextField
        style={{ width: '100%' }}
        name="title"
        label="Nome do Cardápio"
        type="text"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
        error={isError}
        helperText={isError && 'Preencha com o nome'}
      />
      <div className="mt-2 ">
        <FormControl>
          <FormLabel> Escolha a opção de horário </FormLabel>
          <div className="flex">
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="diurno"
              name="radio-buttons-group"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <FormControlLabel
                value="diurno"
                control={<Radio />}
                label="Diurno"
              />
              <FormControlLabel
                value="noturno"
                control={<Radio />}
                label="Noturno"
              />
            </RadioGroup>
          </div>
        </FormControl>
      </div>

      <Buttons disabled={disabled} />
    </form>
  )
}
