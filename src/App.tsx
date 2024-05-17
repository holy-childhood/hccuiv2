import { BrowserRouter as Router } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { HCCTheme } from './theme/HCCTheme.tsx'

import { AppContext } from './DataProvider.ts'
import { AppStore } from './stores/AppStore.ts'

import { Header } from './components/Header.tsx'
import { Main } from './components/Main.tsx'
import { Footer } from './components/Footer.tsx'
import Stack from '@mui/material/Stack'

const appStore = new AppStore()

function App() {

  return (
    <AppContext.Provider value={{ appStore: appStore }}>
      <ThemeProvider theme={HCCTheme}>
        <CssBaseline />
        <Router>
          <Stack sx={{ width: '100%', mx: 'auto', px: { xs: 0, md: 8 }}}>
            <Header />
            <Main />
            <Footer />
          </Stack>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
