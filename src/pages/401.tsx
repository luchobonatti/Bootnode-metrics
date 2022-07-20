// ** React Imports
import Link from 'next/link'
import { ReactNode } from 'react'

// ** Next Import

// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations'

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}))

const Img = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10),
  },
  [theme.breakpoints.down('md')]: {
    height: 400,
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(13),
  },
}))

const Error401 = () => {
  return (
    <Box className="content-center">
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <BoxWrapper>
          <Typography variant="h1">401</Typography>
          <Typography sx={{ mb: 1, fontSize: '1.5rem !important' }} variant="h5">
            You are not authorized! 🔐
          </Typography>
          <Typography variant="body2">
            You don&prime;t have permission to access this page. Go Home!
          </Typography>
        </BoxWrapper>
        <Img alt="error-illustration" height="487" src="/images/pages/401.png" />
        <Link href="/" passHref>
          <Button component="a" sx={{ px: 5.5 }} variant="contained">
            Back to Home
          </Button>
        </Link>
      </Box>
      <FooterIllustrations />
    </Box>
  )
}

Error401.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error401
