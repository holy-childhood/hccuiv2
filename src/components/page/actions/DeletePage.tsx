import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'

import Box from "@mui/material/Box"
import {useNavigate} from 'react-router-dom'
import {usePageStore} from '../../../DataProvider.ts'
import {Button, Typography} from '@mui/material'
import {CommonDialog} from '../../common/CommonDialog.tsx'

interface DeletePageProps {
  id: number | string
}

export const DeletePage: React.FC<DeletePageProps> = ({ id }) => {
  const navigate = useNavigate()
  const { deletePage } = usePageStore()

  const [open, setOpen] = React.useState(false)

  const handleOk = async () => {
    await deletePage(id)
    navigate('/')
  }

  return (
    <Box>
      <Button color="error" onClick={() => setOpen(true)} startIcon={<FontAwesomeIcon icon={faTrash} />} variant="contained">
        Delete Page
      </Button>
      <CommonDialog open={open} title="Delete Page" onCancel={() => setOpen(false)} onOk={handleOk}>
        <Typography>
          Are you sure you want to delete this page?
        </Typography>
      </CommonDialog>
    </Box>
  )
}

export default DeletePage;