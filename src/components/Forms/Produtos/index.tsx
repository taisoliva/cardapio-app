'use client'

import { MenuItem, TextField } from '@mui/material'
import React, { useState, FormEvent } from 'react'
import InputPrice from '../Mask/Price'
import { CategoryProtocol, MenuProtocol } from '@/protocols'
import {
  handleCategoryChange,
  handleDescriptionChange,
  handleImageChange,
  handleMenuChange,
  handleNameChange,
} from '@/utils/handler'
import { handleSubmit } from './handle-submit'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Buttons from '../Buttons'

interface Props {
  dataMenus: [MenuProtocol]
  dataCategory: [CategoryProtocol]
}

export default function FormProdutos({ dataMenus, dataCategory }: Props) {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [menuId, setMenuId] = useState<string>('')
  const [categoryId, setCategoryId] = useState<string>('')

  const [isNameError, setNameError] = useState<boolean>(false)
  const [isImageError, setImageError] = useState<boolean>(false)
  const [isPriceError, setPriceError] = useState<boolean>(false)
  const [isDescriptionError, setDescriptionError] = useState<boolean>(false)
  const [isMenuError, setMenuError] = useState<boolean>(false)
  const [isCategoryError, setCategoryError] = useState<boolean>(false)

  const [disabled, setDisabled] = useState(false)

  const router: AppRouterInstance = useRouter()

  return (
    <form
      className="m-5"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        handleSubmit(
          e,
          router,
          { name, price, image, description, menuId, categoryId },
          setNameError,
          setPriceError,
          setImageError,
          setDescriptionError,
          setMenuError,
          setCategoryError,
          setDisabled,
        )
      }}
    >
      <div>
        <TextField
          style={{ width: '100%', marginBottom: '10px' }}
          label="Nome do Produto"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleNameChange(e, setName, setNameError)
          }}
          error={isNameError}
          helperText={isNameError && 'Preencha com o nome'}
        />

        <InputPrice
          price={price}
          setPrice={setPrice}
          isPriceError={isPriceError}
          setPriceError={setPriceError}
        />

        <TextField
          style={{ width: '100%', marginBottom: '10px' }}
          label="URL da Imagem"
          type="text"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleImageChange(e, setImage, setImageError)
          }}
          error={isImageError}
          helperText={isImageError && 'Imagem inválida'}
        />

        <TextField
          style={{ width: '100%', marginBottom: '10px' }}
          label="Descrição do Produto"
          type="text"
          variant="outlined"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleDescriptionChange(e, setDescription, setDescriptionError)
          }}
          multiline
          error={isDescriptionError}
          helperText={isDescriptionError && 'Campo obrigatório'}
        />

        <TextField
          select
          label="Menu"
          helperText="Por favor! Selecione um Menu"
          style={{ width: '100%', marginBottom: '10px' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleMenuChange(e, setMenuId, setMenuError)
          }}
          error={isMenuError}
        >
          {dataMenus.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Categoria"
          helperText="Por favor! Selecione uma Categoria"
          style={{ width: '100%', marginBottom: '10px' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleCategoryChange(e, setCategoryId, setCategoryError)
          }}
          error={isCategoryError}
        >
          {dataCategory.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <Buttons disabled={disabled} />
    </form>
  )
}
