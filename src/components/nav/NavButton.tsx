import React, { PropsWithChildren } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { Button, ButtonProps } from '@mui/material'
import {ArrowDropDown} from '@mui/icons-material'

export interface NavArgs {
  component?: React.ElementType,
  to?: string | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface NavButtonProps extends ButtonProps {
  icon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  showExpandIcon?: boolean
  to?: string
}

export const NavButton: React.FC<PropsWithChildren<NavButtonProps>> = ({ children, icon, onClick, showExpandIcon = true, to}) => {
  const args: NavArgs = {}

  if (to) {
    args.component = RouterLink
    args.to = to
  } else if (onClick) {
    args.onClick = onClick
  }

  return (
    <Button
      {...args}
      endIcon={showExpandIcon ? <ArrowDropDown /> : undefined}
      startIcon={icon}
      sx={{
        color: 'primary.contrastText',
        fontFamily: 'inherit',
        fontSize: 18,
        fontWeight: 600,
        height: 32,
        '& .MuiButton-endIcon': {
          marginLeft: .25,
        },
        '&:hover': {
          color: 'secondary.main',
          bgcolor: 'primary.main'
        }
      }}
    >
      {children}
    </Button>
  )
}