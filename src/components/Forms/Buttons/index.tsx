import { Button } from '@mui/material'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface ButtonsProps {
  disabled: boolean
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#EA580B', // Define a cor laranja
    },
    mode: 'dark',
  },
})
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
      <ThemeProvider theme={theme}>
        <Button
          color="primary"
          disabled={disabled}
          variant="outlined"
          type="submit"
        >
          Salvar
        </Button>
      </ThemeProvider>
    </div>
  )
}
