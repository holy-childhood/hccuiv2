import React from 'react'

import Box from "@mui/material/Box"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {Button, TextField} from '@mui/material'
import {CommonDialog} from '../../common/CommonDialog.tsx'
import {useMenuStore} from '../../../DataProvider.ts'

interface AddMenuProps {

}

export const AddMenu: React.FC<AddMenuProps> = ({}) => {
  const { addMenu } = useMenuStore()

  const [name, setName] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const close = () => {
    setName('')
    setOpen(false)
  }

  const handleOk = async () => {
    await addMenu(name)
    close()
  }

  return (
    <Box sx={{ ml: 1, mb: .5}}>
      <Button color="success" onClick={() => setOpen(true)} startIcon={<FontAwesomeIcon icon={faPlus} />} variant="contained">
        Add Menu
      </Button>
      <CommonDialog open={open} title="Add Menu" onCancel={close} onOk={handleOk}>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          label="Menu name"
          size="small"
          fullWidth
          autoFocus
        />
      </CommonDialog>
    </Box>
  )
}

export default AddMenu;