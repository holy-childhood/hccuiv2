import { createTheme } from '@mui/material/styles'

export const HCCTheme = createTheme({
  palette: {
    background: {
      default: "lightgray",
      paper: "#ffffff"
    },
    primary: {
      light: '#007ad9',
      main: '#1f3e65',
      dark: '#0d1d32',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffdf33',
      main: '#ffd700',
      dark: '#b29600'
    }
  },
  typography: {
    fontFamily: "Segoe UI, Roboto",
    fontWeightMedium: 600,
    fontWeightBold: 800,
    fontWeightRegular: 400,
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
})