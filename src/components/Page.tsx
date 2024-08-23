import React from 'react'

import { observer } from "mobx-react-lite";
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import {useParams} from 'react-router-dom'
import {useAuthStore, usePageStore, useUiStore} from '../DataProvider.ts'
import PageAdminPanel from './page/PageAdminPanel.tsx'
import PageBreadcrumbs from './page/PageBreadcrumbs.tsx'
import PageContent from './page/PageContent.tsx'
import Stack from '@mui/material/Stack'

export const Page = observer(() => {
  const { id } = useParams<"id">()

  const { page, loadPage, loaded } = usePageStore()
  const { isAdministrator } = useAuthStore()
  const { isEdit } = useUiStore()

  React.useEffect(() => {
    loadPage(Number(id)).finally()
  }, [loadPage, id])

  return (
    <Box>
      {page && isAdministrator && isEdit &&
        <PageAdminPanel page={page} />
      }

      <Box px={2} py={1} width="100%">
        <PageBreadcrumbs page={page} />
        <Fade in={loaded} timeout={{ enter: 400, exit: 0 }}>
          <Stack direction="row" gap={2} justifyContent="flex-start" p={1} width="100%">
            <PageContent page={page} />
          </Stack>
        </Fade>
      </Box>
    </Box>
  )
})
