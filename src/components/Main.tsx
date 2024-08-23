import Box from '@mui/material/Box'
import {Route, Routes} from 'react-router-dom'
import {Home} from './Home.tsx'
import {Page} from './Page.tsx'

export const Main = () => {
  return (
    <Box bgcolor="background.paper" minHeight="calc(100dvh - 365px)">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:id" element={<Page />} />
      </Routes>
    </Box>
  )
}