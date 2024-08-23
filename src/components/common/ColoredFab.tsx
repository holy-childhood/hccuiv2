import React from 'react'
import Fab from "@mui/material/Fab";
import {grey, green, blue, red, amber} from "@mui/material/colors";

interface ColoredFabProps {
  color: string
  onClick: () => void
}

export const ColoredFab: React.FC<React.PropsWithChildren<ColoredFabProps>> = ({ color, onClick, children }) => {

  let backgroundColor: string = grey[600]
  let hoverColor: string = grey[700]
  let fontColor: string = '#fff'

  if (color === 'green') {
    backgroundColor = green[600]
    hoverColor = green[700]
  } else if (color === 'red') {
    backgroundColor = red[600]
    hoverColor = red[700]
  } else if (color === 'blue') {
    backgroundColor = blue[600]
    hoverColor = blue[700]
  } else if (color === 'yellow') {
    backgroundColor = amber[600]
    hoverColor = amber[700]
    fontColor = '#000'
  }

  return (
    <Fab
      onClick={onClick}
      variant='extended'
      sx={{
        color: fontColor,
        backgroundColor: backgroundColor,
        height: '26px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: hoverColor
        },
        m: .5,
        zIndex: 0,
      }}
    >
      {children}
    </Fab>
  )
}