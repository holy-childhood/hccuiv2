import {observer} from 'mobx-react-lite'
import Box from '@mui/material/Box'
import {config} from '../Config.ts'
import Typography from '@mui/material/Typography'

export const Home = observer(() => {

  return (
    <Box>
      <Box sx={{ backgroundImage: `url(${config.staticUrl}/alter2.jpg)`, backgroundSize: "cover", backgroundPosition: "center 58%", height: 225}}>
        <Box height="100%" position="relative" mr={3}>
          <Typography
            sx={{
              position: 'absolute',
              top: '35%',
              left: '5%',
              right: 'auto',
              bottom: 'auto',
              width: { sm: '75%', md: 400 },
              m: 0,
              p: 1.5,
              pl: 3,
              borderRadius: 3,
              wordWrap: 'break-word',
              textAlign: 'left',
              fontFamily: 'inherit',
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: '#fff'
            }}
          >
            {config.homeQuote}
          </Typography>
        </Box>
      </Box>

      <Box margin={2.5}>
        Content goes here
      </Box>
    </Box>
  )
})