import { PropsWithChildren } from 'react'
import { Link as RouterLink } from "react-router-dom"

import { NavArgs } from './NavButton.tsx'
import { MenuItem } from '@mui/material'


interface NavMenuItemProps {
  to?: string
  onClick?: () => void
}

export const NavMenuItem: React.FC<PropsWithChildren<NavMenuItemProps>> = ({ to, onClick, children }) => {
  const args = { onClick: onClick} as NavArgs

  if (to) {
    args.component = RouterLink
    args.to = to
  }

  return (
    // @ts-expect-error MenuItem doesn't support component
    <MenuItem
      {...args}
      sx={{
        fontFamily: 'inherit',
        fontSize: 16,
        fontWeight: 550,
        p: "4px 24px",
        '&:hover': {
          bgcolor: 'primary.dark',
          color: 'secondary.main',
        }
      }}
    >
      {children}
    </MenuItem>
  )
}