// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Facebook from 'mdi-material-ui/Facebook'
import Heart from 'mdi-material-ui/Heart'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardFacebook = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'primary.main' }}>
      <CardContent sx={{ padding: (theme) => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          variant="h6"
        >
          <Facebook sx={{ marginRight: 2.5 }} />
          Facebook Card
        </Typography>
        <Typography sx={{ marginBottom: 3, color: 'common.white' }} variant="body2">
          You’ve read about the importance of being courageous, rebellious and imaginative. These
          are all vital ingredients in an effective.
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
              alt="Eugene Clarke"
              src="/images/avatars/1.png"
              sx={{ width: 34, height: 34, marginRight: 2.75 }}
            />
            <Typography sx={{ color: 'common.white' }} variant="body2">
              Eugene Clarke
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Heart sx={{ marginRight: 1.25 }} />
              <Typography sx={{ color: 'common.white' }} variant="body2">
                3.2k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />
              <Typography sx={{ color: 'common.white' }} variant="body2">
                49
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardFacebook
