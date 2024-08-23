import React from 'react'

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Menu} from '../../../models/Menu.ts'
import {useMenuStore} from '../../../DataProvider.ts'
import {NavMenuItem} from '../NavMenuItem.tsx'
import {CommonDialog} from '../../common/CommonDialog.tsx'
import {TextField} from '@mui/material'

interface EditMenuProps {
  menu: Menu
}

export const EditMenu: React.FC<EditMenuProps> = ({ menu }) => {
  const { updateMenu } = useMenuStore()

  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState(menu.title)

  const close = () => {
    setTitle(menu.title)
    setOpen(false)
  }

  const handleUpdate = async () => {
    await updateMenu(menu, title)
    close()
  }

  return (
    <>
      <NavMenuItem onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faPencilAlt} style={{ marginRight: 8 }} />
        <i>Edit Menu...</i>
      </NavMenuItem>
      <CommonDialog open={open} title='Edit Menu' onOk={handleUpdate} onCancel={close}>
        <TextField
          label='Menu name'
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

export default EditMenu;