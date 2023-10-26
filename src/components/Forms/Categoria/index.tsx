'use client'

import { postCategory } from '@/services/categoriaApi'
import { TextField } from '@mui/material'
import { useState, FormEvent } from 'react'
import Buttons from '../Buttons'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export default function FormCategoria() {
  const [name, setName] = useState<string>('')
  const [isError, setError] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)

  const router: AppRouterInstance = useRouter()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDisabled(true)

    if (name === '') {
      setError(true)
      setDisabled(false)
      router.push('/')
    } else {
      setError(false)
      const body = {
        name,
      }

      try {
        const promise = await postCategory(body)
        console.log(promise)
        setDisabled(false)
        router.push('/')
      } catch (error) {
        console.log(error)
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
