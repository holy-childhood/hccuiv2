import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import {Avatar, Link, Typography} from '@mui/material'
import {config} from '../Config.ts'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Nav} from './Nav.tsx'

export const Header = () => (
  <header>
    <Stack>
      <Stack
        bgcolor="primary.dark"
        color="primary.contrastText"
        direction={{ xs: "column", sm: "row" }}
        fontSize={15}
        fontWeight={600}
        mt={{ xs: 0, md: 1.25 }}
        py={2}
        sx={{ borderTopRightRadius: { xs: 0, md: '10px' }, borderTopLeftRadius: { xs: 0, md: '10px'} }}
        width="100%"
      >
        <Stack
          direction="row"
          flexGrow={1}
          alignItems="center"
          justifyContent={{ xs: "center", sm: "flex-start"}}
          pl={{ xs: 0, sm: 2.5 }}
        >
          <Avatar
            alt="logo"
            src={`${config.staticUrl}/logo.png`}
            sx={{height: 64, width: 64}}
          />
          <Stack ml={2.5}>
            <Typography fontSize={{ xs: "1.25rem", md: "1.9rem" }} fontWeight={500}>
              {config.title}
            </Typography>
            <Typography fontSize={{ xs: ".9rem", md: "1rem" }} fontWeight={500}>
              {config.subTitle}
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems={{ xs: 'center', sm: 'flex-start'}} mt={{ xs: 2, sm: 0 }} mx={2.5}>
          <Typography>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px'}} />
            {config.phone}
          </Typography>
          <Link href={`mailto:${config.email}`} sx={{ color: 'primary.light' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px'}} />
            {config.email}
          </Link>
        </Stack>
      </Stack>
      <Box bgcolor="primary.main" color="primary.contrastText">
        <Nav />
      </Box>
    </Stack>
  </header>
)
