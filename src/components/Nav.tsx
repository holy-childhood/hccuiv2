import React from 'react'
import { observer } from 'mobx-react-lite'
import { Link as RouterLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'

import MenuIcon from '@mui/icons-material/Menu'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'

import { useMenuStore } from '../DataProvider.ts'
import { Menu } from '../models/Menu.ts'

import { NavButton } from './nav/NavButton.tsx'
import { NavMenu } from './nav/NavMenu.tsx'
import {ExpandMore} from '@mui/icons-material'
import {Button, Typography} from '@mui/material'

export const Nav = observer(() => {
  const { loadMenu, menus } = useMenuStore()

  React.useEffect(() => {
    loadMenu().finally()
  }, [loadMenu])

  return (
    <AppBar position="static">
      <Box display={{ xs: 'none', md: 'block' }} px={2}>
        <Toolbar disableGutters variant="dense">
          <NavButton icon={<FontAwesomeIcon icon={faHome} />} to="/">
            Home
          </NavButton>
          {menus.map((menu: Menu) => (
            <Box key={menu.id}>
              <NavMenu menu={menu} />
            </Box>
          ))}
        </Toolbar>
      </Box>
      <Box display={{ md: 'none' }}>
        <Accordion disableGutters sx={{ '&:last-of-type': {borderRadius: 0 }}}>
          <AccordionSummary sx={{ bgcolor: 'primary.main' }}>
            <Button
              startIcon={<MenuIcon />}
              sx={{ color: 'primary.contrastText', fontSize: 18, fontWeight: 600, '& .MuiButton-startIcon>*:nth-of-type(1)': { fontSize: 28}, p:0 }}
            >
              Menu
            </Button>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: 'primary.dark' }}>
            <Stack>
              <Link
                component={RouterLink}
                to="/"
                sx={{
                  color:"primary.contrastText",
                  fontSize: 18,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    color: 'secondary.main',
                    textDecoration: 'none',
                  }
                }}
              >
                <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Home
              </Link>
              {menus.map((menu: Menu) => (
                <Accordion key={menu.id} disableGutters sx={{ '&:last-of-type': {borderRadius: 0 }}}>
                  <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: "primary.contrastText" }} />}
                    sx={{
                      bgcolor: 'primary.dark',
                      color: 'primary.contrastText',
                      fontSize: 18,
                      fontWeight: 600,
                      p: 0,
                      py: 1,
                      '& .MuiAccordionSummary-content': { margin: 0 }
                    }}
                  >
                    {menu.title}
                  </AccordionSummary>
                  <AccordionDetails sx={{ bgcolor: 'primary.dark', pb: 1, pl: 4, opacity: .9 }}>
                    {menu.pages?.map(page => (
                      <Typography key={page.id} color="primary.contrastText" fontSize={18} fontWeight={500}>
                        {page.title}
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>
    </AppBar>
  )
})