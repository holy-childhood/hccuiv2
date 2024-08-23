import React from 'react'

import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'

import {NavMenuItem} from '../NavMenuItem.tsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {CommonDialog} from '../../common/CommonDialog.tsx'
import {TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {Menu} from '../../../models/Menu.ts'
import {usePageStore} from '../../../DataProvider.ts'

interface AddPageProps {
  menu: Menu,
  onClose: () => void
}

export const AddPage: React.FC<AddPageProps> = ({ menu, onClose }) => {
  const navigate = useNavigate()
  const { addPage } = usePageStore()

  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')

  const close = () => {
    setTitle('')
    setOpen(false)
  }

  const handleAddPage = async () => {
    const page = await addPage(title, menu)
    close()
    onClose()
    navigate(`/page/${page.id}`)
  }

  return (
    <>
      <NavMenuItem onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />
        <i>Add Page...</i>
      </NavMenuItem>
      <CommonDialog open={open} title='Add page' onOk={handleAddPage} onCancel={close}>
        <TextField
          label='Page title'
          onChange={e => setTitle(e.target.value)}
          value={title}
          size="small"
          fullWidth
          autoFocus
        />
      </CommonDialog>
    </>
  )
}

export default AddPage;