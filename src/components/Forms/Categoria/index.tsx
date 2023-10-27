'use client'

import { postCategory } from '@/services/categoriaApi'
import { TextField } from '@mui/material'
import { useState, FormEvent } from 'react'
import Buttons from '../Buttons'
import { CategoryProtocol } from '@/protocols'

export default function FormCategoria({
  setCurrentTab,
  categoryData,
  setCategoryData,
}: {
  setCurrentTab: (value: string) => void
  categoryData: CategoryProtocol[]
  setCategoryData: React.Dispatch<React.SetStateAction<CategoryProtocol[]>>
}) {
  const [name, setName] = useState<string>('')
  const [isError, setError] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
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
      }

      const promise = await postCategory(body)
      if (promise.ok) {
        const newCategory = await promise.json()
        categoryData.push(newCategory)
        setCategoryData(categoryData)
        setCurrentTab('tab3')
        setDisabled(false)
      } else {
        alert('Não foi possível criar')
        setDisabled(false)
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

      <Buttons disabled={disabled} />
    </form>
  )
}
