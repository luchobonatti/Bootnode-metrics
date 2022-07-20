// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const CardUser = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia image="/images/cards/background-user.png" sx={{ height: '12.625rem' }} />
      <Avatar
        alt="Robert Meyer"
        src="/images/avatars/1.png"
        sx={{
          width: 75,
          height: 75,
          left: '1.313rem',
          top: '10.28125rem',
          position: 'absolute',
          border: (theme) => `0.25rem solid ${theme.palette.common.white}`,
        }}
      />
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Robert Meyer</Typography>
            <Typography variant="caption">London, UK</Typography>
          </Box>
          <Button variant="contained">Send Request</Button>
        </Box>
        <Box
          sx={{
            gap: 2,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ whiteSpace: 'nowrap', color: 'text.primary' }} variant="subtitle2">
            18 mutual friends
          </Typography>
          <AvatarGroup max={4}>
            <Avatar alt="Alice Cobb" src="/images/avatars/8.png" />
            <Avatar alt="Jeffery Warner" src="/images/avatars/7.png" />
            <Avatar alt="Howard Lloyd" src="/images/avatars/3.png" />
            <Avatar alt="Bettie Dunn" src="/images/avatars/2.png" />
            <Avatar alt="Olivia Sparks" src="/images/avatars/4.png" />
            <Avatar alt="Jimmy Hanson" src="/images/avatars/5.png" />
            <Avatar alt="Hallie Richards" src="/images/avatars/6.png" />
          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUser
