import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'

import {Page} from '../../models/Page.ts'
import {useAuthStore, useUiStore} from '../../DataProvider.ts'
import AddContent from './actions/AddContent.tsx'

interface PageContentProps {
  page: Page | null
}

export const PageContent: React.FC<PageContentProps> = ({ page }) => {

  const { isAdministrator } = useAuthStore()
  const { isEdit } = useUiStore()

  return (
    <Grid container direction="row" justifyContent="flex-start" spacing={2} width="100%">
      {page?.contents.map(content => (
        <Grid key={content.id} mb={2} xs={content.width}>
          Contents
        </Grid>
      ))}
      {isEdit && isAdministrator &&
        <AddContent page={page} />
      }
    </Grid>
  )
}

export default PageContent;