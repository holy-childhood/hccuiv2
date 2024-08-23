import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt'

import Box from "@mui/material/Box"
import {Page} from '../../../models/Page.ts'
import {usePageStore} from '../../../DataProvider.ts'
import {Button, TextField} from '@mui/material'
import {CommonDialog} from '../../common/CommonDialog.tsx'

interface EditPageProps {
  page: Page
}

export const EditPage: React.FC<EditPageProps> = ({ page }) => {

  const { updatePage } = usePageStore()

  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState(page.title)

  React.useEffect(() => {
    if (open) setTitle(page.title)
  }, [open, page])

  const handleOk = async () => {
    await updatePage({ ...page, title })
    setOpen(false)
  }

  return (
    <Box>
      <Button color="info" onClick={() => setOpen(true)} startIcon={<FontAwesomeIcon icon={faPencilAlt}/>} variant="contained">
        Edit Page
      </Button>
      <CommonDialog open={open} title="Edit Page" onCancel={() => setOpen(false)} onOk={handleOk}>
        <TextField
          value={title}
          size="small"
          label="Page Title"
          onChange={e => setTitle(e.target.value)}
          fullWidth
          autoFocus
        />
      </CommonDialog>
    </Box>
  )
}

export default EditPage;