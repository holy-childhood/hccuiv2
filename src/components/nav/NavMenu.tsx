import React from 'react'
import {observer} from 'mobx-react-lite'
import Box from '@mui/material/Box'
import {Menu} from '../../models/Menu.ts'
import {NavButton} from './NavButton.tsx'
import {ClickAwayListener, Divider, Fade, Paper, Popper} from '@mui/material'
import {NavMenuItem} from './NavMenuItem.tsx'
import {useAuthStore, useUiStore} from '../../DataProvider.ts'
import Stack from '@mui/material/Stack'
import DeleteMenu from './actions/DeleteMenu.tsx'
import EditMenu from './actions/EditMenu.tsx'
import AddPage from './actions/AddPage.tsx'
import {grey} from '@mui/material/colors'

interface NavMenuProps {
  menu: Menu
}

export const NavMenu: React.FC<NavMenuProps> = observer(({ menu }) => {

  const { isAdministrator } = useAuthStore()
  const { isEdit } = useUiStore()

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

              {isAdministrator && isEdit &&
                <Stack>
                  <Divider sx={{ bgcolor: grey[500], m: 1 }} />

                  <AddPage menu={menu} onClose={() => setOpen(false)} />
                  <EditMenu menu={menu} />
                  <DeleteMenu menu={menu} />
                </Stack>
              }
            </Paper>
          </Fade>
        </Popper>
      </Box>
    </ClickAwayListener>
  )
})