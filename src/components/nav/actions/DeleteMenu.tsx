import React from 'react'

import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'

import {NavMenuItem} from '../NavMenuItem.tsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useMenuStore} from '../../../DataProvider.ts'
import {Menu} from '../../../models/Menu.ts'
import {CommonDialog} from '../../common/CommonDialog.tsx'
import {Typography} from '@mui/material'

interface DeleteMenuProps {
  menu: Menu
}

export const DeleteMenu: React.FC<DeleteMenuProps> = ({ menu }) => {
  const { deleteMenu } = useMenuStore()

  const [open, setOpen] = React.useState(false)

  const handleDelete = async () => {
    await deleteMenu(menu.id)
  }

  return (
    <>
      <NavMenuItem disabled={menu.pages?.length !== 0} onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faTrash} style={{ marginRight: 8 }} />
        <i>Delete Menu</i>
      </NavMenuItem>
      <CommonDialog open={open} title='Delete Menu' onOk={handleDelete} onCancel={() => setOpen(false)}>
        <Typography>
          Are you sure you want to delete <b>{menu.title}</b>?
        </Typography>
      </CommonDialog>
    </>
  )
}

export default DeleteMenu;