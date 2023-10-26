'use client'

import { NumericFormat, PatternFormatProps } from 'react-number-format'
import { TextField } from '@mui/material'
import React from 'react'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

interface InputPriceProps {
  price: string
  setPrice: (value: string) => void
  isPriceError: boolean
  setPriceError: (error: boolean) => void
}

const PatternFormatCustom = React.forwardRef<PatternFormatProps, CustomProps>(
  function PatternFormatCustom(props, ref) {
    const { onChange, ...other } = props

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          })
        }}
        allowNegative={false}
        decimalSeparator="."
        prefix="R$ "
        decimalScale={2}
      />
    )
  },
)

export default function InputPrice({
  price,
  setPrice,
  isPriceError,
  setPriceError,
}: InputPriceProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
    setPriceError(false)
  }

  return (
    <TextField
      style={{ width: '100%', marginBottom: '10px' }}
      label="Preço"
      value={price}
      onChange={handleChange}
      name="price"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: PatternFormatCustom as any,
      }}
      variant="outlined"
      error={isPriceError}
      inputProps={{ maxLength: 10 }}
    />
  )
}
