import { Button, CircularProgress } from '@mui/material'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { Oval } from 'react-loader-spinner'

interface ButtonsProps {
  disabled: boolean
}

export default function Buttons({ disabled }: ButtonsProps) {
  const router: AppRouterInstance = useRouter()

  return (
    <div className="flex mt-2 p-1">
      <Button
        onClick={() => router.push('/')}
        style={{ marginRight: '20px', backgroundColor: 'black' }}
        variant="contained"
      >
        Cancelar
      </Button>

      {disabled ? (
        <Button>
          {' '}
          <CircularProgress />{' '}
        </Button>
      ) : (
        <Button
          color="primary"
          disabled={disabled}
          variant="outlined"
          type="submit"
        >
          Salvar
        </Button>
      )}
    </div>
  )
}
