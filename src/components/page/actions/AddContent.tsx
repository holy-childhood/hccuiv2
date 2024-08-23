import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'
import TextIcon from "@mui/icons-material/TextSnippet"
import TabIcon from "@mui/icons-material/Tab"
import CalendarIcon from "@mui/icons-material/CalendarToday";
import PdfIcon from "@mui/icons-material/PictureAsPdf";

import {Page} from '../../../models/Page.ts'
import {grey} from '@mui/material/colors'
import {SpeedDial, SpeedDialAction, SpeedDialIcon, Typography} from '@mui/material'
import Box from '@mui/material/Box'

interface AddContentProps {
  page: Page | null
}

export const AddContent: React.FC<AddContentProps> = ({ page }) => {


  return (
   <Grid ml={2} my={2} p={1} sx={{ '&:hover': { bgcolor: grey[100], borderRadius: '8px' } }} xs={12}>
     <Box>
       <Typography sx={{ color: grey[500], mb: 0}}>Add Content</Typography>
       <SpeedDial ariaLabel="Add Content" icon={<SpeedDialIcon />} direction="right" sx={{'.MuiSpeedDial-fab': {height: 40, width: 40}}}>
         <SpeedDialAction icon={<TextIcon />} tooltipTitle="Add Text/HTML" />
         <SpeedDialAction icon={<TabIcon />} tooltipTitle="Add Tabs" />
         <SpeedDialAction icon={<CalendarIcon />} tooltipTitle="Add Calendar" />
         <SpeedDialAction icon={<PdfIcon />} tooltipTitle="Add PDF Viewer" />
       </SpeedDial>
     </Box>
   </Grid>
  )
}

export default AddContent;