import React from 'react'
import {observer} from 'mobx-react-lite'
import Box from '@mui/material/Box'
import {Menu} from '../../models/Menu.ts'
import {NavButton} from './NavButton.tsx'
import {ClickAwayListener, Fade, Paper, Popper} from '@mui/material'
import {NavMenuItem} from './NavMenuItem.tsx'

interface NavMenuProps {
  menu: Menu
}

export const NavMenu: React.FC<NavMenuProps> = observer(({ menu }) => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = React.useState(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(open ? null : event.currentTarget)
    setOpen(!open)
  }

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box>
        <NavButton onClick={handleClick}>
          {menu.title}
        </NavButton>
        <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
          <Fade in={open} timeout={250}>
            <Paper sx={{ bgcolor: 'primary.dark', color: 'primary.contrastText', mt: '2px', py: 1, width: 200}}>
              {menu.pages?.map(page => (
                <NavMenuItem key={page.id} to={`/page/${page.id}`} onClick={() => setOpen(false)}>
                  {page.title}
                </NavMenuItem>
              ))}
            </Paper>
          </Fade>
        </Popper>
      </Box>
    </ClickAwayListener>
  )
})