import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import {config} from '../Config.ts'

export const Footer = () => (
  <Box>
    <Stack bgcolor="background.paper" direction="row" justifyContent="space-between" p={2.5}>
      <Box height={{ xs: 60, sm: 80}}>
        <img src={`${config.staticUrl}/Insigne_Francisci.png`} alt="Pope Francis Insigne" style={{ height: "100%" }} />
      </Box>
      <Box height={{ xs: 60, sm: 80}}>
        <img src={`${config.staticUrl}/usccb-logo.png`} alt="USCCB" style={{ height: "100%" }} />
      </Box>
      <Box height={{ xs: 60, sm: 80}}>
        <img src={`${config.staticUrl}/diocese_of_belleville_logo.png`} alt="Diocese of Bellevile" style={{ height: "100%" }} />
      </Box>


    </Stack>
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        w: '100%',
        pt: 2,
        pb: 4,
        textAlign: 'left',
        borderBottomLeftRadius: { xs: 0, md: '10px'},
        borderBottomRightRadius: { xs: 0, md: '10px'}
      }}
    >
      <Typography fontSize={16} fontWeight={600} ml={2.5}>
        Copyright &copy; {(new Date()).getFullYear()} Holy Childhood of Jesus Catholic Church
      </Typography>
    </Box>
  </Box>
)
