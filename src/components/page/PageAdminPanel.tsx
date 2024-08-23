import React from 'react'

import {Page} from '../../models/Page.ts'
import EditPage from './actions/EditPage.tsx'
import DeletePage from './actions/DeletePage.tsx'
import Stack from '@mui/material/Stack'

interface PageAdminPanelProps {
  page: Page
}

export const PageAdminPanel: React.FC<PageAdminPanelProps> = ({ page }) => {

  return (
    <Stack direction="row" gap={1} pl={2} py={.75} sx={{ backgroundImage: 'repeating-linear-gradient(45deg, #d3d3d3, #d3d3d3 10px, #c4bfbf 10px, #c4bfbf 20px)'}}>
      <EditPage page={page} />
      <DeletePage id={page.id} />
    </Stack>
  )
}

export default PageAdminPanel;