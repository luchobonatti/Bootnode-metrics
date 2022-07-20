// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Linkedin from 'mdi-material-ui/Linkedin'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardLinkedIn = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'success.main' }}>
      <CardContent sx={{ padding: (theme) => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          variant="h6"
        >
          <Linkedin sx={{ marginRight: 2.5 }} />
          LinkedIn Card
        </Typography>
        <Typography sx={{ marginBottom: 3, color: 'common.white' }} variant="body2">
          With the Internet spreading like wildfire and reaching every part of our daily life, more
          and more traffic is directed.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="Anne Burke"
              src="/images/avatars/8.png"
              sx={{ width: 34, height: 34, marginRight: 2.75 }}
            />
            <Typography sx={{ color: 'common.white' }} variant="body2">
              Anne Burke
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Heart sx={{ marginRight: 1.25 }} />
              <Typography sx={{ color: 'common.white' }} variant="body2">
                1.1k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />
              <Typography sx={{ color: 'common.white' }} variant="body2">
                67
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardLinkedIn
