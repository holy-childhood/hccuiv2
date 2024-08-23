import React from 'react'
import {Link} from "react-router-dom"

import {Page} from '../../models/Page.ts'
import {Breadcrumbs, Paper, Typography, useTheme} from '@mui/material'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome'

interface PageBreadcrumbsProps {
  page: Page | null
}

export const PageBreadcrumbs: React.FC<PageBreadcrumbsProps> = ({ page }) => {
  const theme = useTheme()

  return (
    <Paper elevation={2} sx={{bgcolor: '#ebebeb', p: 1, mt: .5, mb: 2 }}>
      <Breadcrumbs>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} style={{color: theme.palette.info.main}} />
        </Link>
        {page?.menu &&
          <Typography>{page?.menu.title}</Typography>
        }
        <Typography>{page?.title}</Typography>
      </Breadcrumbs>
    </Paper>
  )
}

export default PageBreadcrumbs;