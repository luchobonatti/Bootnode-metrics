// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import ShareVariant from 'mdi-material-ui/ShareVariant'
import Twitter from 'mdi-material-ui/Twitter'

const CardTwitter = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'info.main' }}>
      <CardContent sx={{ padding: (theme) => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          variant="h6"
        >
          <Twitter sx={{ marginRight: 2.5 }} />
          Twitter Card
        </Typography>
        <Typography sx={{ marginBottom: 3, color: 'common.white' }} variant="body2">
          Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases
          are type invalid as well.
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
              alt="Mary Vaughn"
              src="/images/avatars/4.png"
              sx={{ width: 34, height: 34, marginRight: 2.75 }}
            />
            <Typography sx={{ color: 'common.white' }} variant="body2">
              Mary Vaughn
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Heart sx={{ marginRight: 1.25 }} />
              <Typography sx={{ color: 'common.white' }} variant="body2">
                1.2k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />
              <Typography sx={{ color: 'common.white' }} variant="body2">
                80
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardTwitter
