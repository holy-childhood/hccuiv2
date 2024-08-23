import { createTheme } from '@mui/material/styles'
import {amber, blue, green, red} from '@mui/material/colors'

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
    },
    info: {
      light: blue[500],
      main: blue[600],
      dark: blue[700],
      contrastText: '#fff'
    },
    error: {
      light: red[500],
      main: red[600],
      dark: red[700]
    },
    success: {
      light: green[500],
      main: green[600],
      dark: green[700]
    },
    warning: {
      light: amber[500],
      main: amber[600],
      dark: amber[700]
    },
    action: {
      hoverOpacity: 0.2
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
          borderRadius: 14,
          height: 28,
          padding: 14,
          textTransform: 'none'
        }
      }
    }
  }
})