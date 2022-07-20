// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import StarOutline from 'mdi-material-ui/StarOutline'
import TrendingUp from 'mdi-material-ui/TrendingUp'

// Styled Box component
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

const CardMembership = () => {
  return (
    <Card>
      <Grid container spacing={6}>
        <Grid item sm={7} xs={12}>
          <CardContent sx={{ padding: (theme) => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
            <Typography sx={{ marginBottom: 3.5 }} variant="h6">
              Lifetime Membership
            </Typography>
            <Typography variant="body2">
              Here, I focus on a range of items and features that we use in life without giving them
              a second thought such as Coca Cola, body muscles and holding ones own breath. Though,
              most of these notes are not fundamentally necessary, they are such that you can use
              them for a good laugh, at a drinks party or for picking up women or men.
            </Typography>
            <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
            <Grid container spacing={4}>
              <Grid item sm={5} xs={12}>
                <StyledBox>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                    <LockOpenOutline
                      fontSize="small"
                      sx={{ color: 'primary.main', marginRight: 2.75 }}
                    />
                    <Typography variant="body2">Full Access</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountOutline
                      fontSize="small"
                      sx={{ color: 'primary.main', marginRight: 2.75 }}
                    />
                    <Typography variant="body2">15 Members</Typography>
                  </Box>
                </StyledBox>
              </Grid>
              <Grid item sm={7} xs={12}>
                <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                  <StarOutline fontSize="small" sx={{ color: 'primary.main', marginRight: 2.75 }} />
                  <Typography variant="body2">Access all Features</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TrendingUp fontSize="small" sx={{ color: 'primary.main', marginRight: 2.75 }} />
                  <Typography variant="body2">Lifetime Free Update</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid
          item
          sm={5}
          sx={{
            paddingTop: ['0 !important', '1.5rem !important'],
            paddingLeft: ['1.5rem !important', '0 !important'],
          }}
          xs={12}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'action.hover',
              padding: (theme) => `${theme.spacing(18, 5, 16)} !important`,
            }}
          >
            <Box>
              <Box
                sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
              >
                <Typography variant="h6">$</Typography>
                <Typography
                  sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}
                  variant="h6"
                >
                  899
                </Typography>
                <Typography variant="h6">USD</Typography>
              </Box>
              <Typography
                sx={{ mb: 13.75, display: 'flex', flexDirection: 'column' }}
                variant="body2"
              >
                <span>5 Tips For Offshore</span>
                <span>Software Development</span>
              </Typography>
              <Button variant="contained">Contact Now</Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMembership
