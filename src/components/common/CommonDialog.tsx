import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Button from '@mui/material/Button'

interface CommonDialogProps {
  open: boolean
  size?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  title: string
  okText?: string
  okIcon?: React.ReactNode
  okDisabled?: boolean
  onOk?: () => void
  cancelText?: string
  cancelDisabled?: boolean
  onCancel: () => void
  extraAction?: React.ReactNode
}

export const CommonDialog: React.FC<React.PropsWithChildren<CommonDialogProps>> = ({
  children,
  open,
  size= 'xs',
  title,
  okText = 'Ok',
  okIcon = <FontAwesomeIcon icon={faCheck} />,
  okDisabled = false,
  cancelText = 'Cancel',
  cancelDisabled = false,
  onOk,
  onCancel,
  extraAction
}) => {

  return (
    <Dialog open={open} disableEscapeKeyDown maxWidth={size} fullWidth>
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        <Box my={2}>
          {children}
        </Box>
      </DialogContent>
      <DialogActions sx={{mr: 1, mb: 1}}>
        {extraAction &&
          <Box component="span">
            {extraAction}
          </Box>
        }
        <Button
          disabled={cancelDisabled}
          sx={{fontWeight: 600}}
          startIcon={<FontAwesomeIcon icon={faBan} />}
          onClick={onCancel}
        >
          {cancelText}
        </Button>
        {onOk &&
          <Button
            disabled={okDisabled}
            size="small"
            variant="contained"
            sx={{fontWeight: 600}}
            startIcon={okIcon}
            onClick={onOk}
          >
            {okText}
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
}