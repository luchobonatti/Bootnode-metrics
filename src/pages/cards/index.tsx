// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings'
import CardImgTop from 'src/views/cards/CardImgTop'
import CardInfluencer from 'src/views/cards/CardInfluencer'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import CardMembership from 'src/views/cards/CardMembership'
import CardMobile from 'src/views/cards/CardMobile'
import CardNavigation from 'src/views/cards/CardNavigation'
import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'
import CardSupport from 'src/views/cards/CardSupport'
import CardTwitter from 'src/views/cards/CardTwitter'
import CardUser from 'src/views/cards/CardUser'
import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item sx={{ paddingBottom: 4 }} xs={12}>
        <Typography variant="h5">Basic Cards</Typography>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardImgTop />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardUser />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardWithCollapse />
      </Grid>
      <Grid item sm={6} xs={12}>
        <CardMobile />
      </Grid>
      <Grid item sm={6} xs={12}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardAppleWatch />
      </Grid>
      <Grid item md={8} xs={12}>
        <CardMembership />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardInfluencer />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardVerticalRatings />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardSupport />
      </Grid>
      <Grid item sx={{ pb: 4, pt: (theme) => `${theme.spacing(17.5)} !important` }} xs={12}>
        <Typography variant="h5">Navigation Cards</Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <CardNavigation />
      </Grid>
      <Grid item md={6} xs={12}>
        <CardNavigationCenter />
      </Grid>
      <Grid item sx={{ pb: 4, pt: (theme) => `${theme.spacing(17.5)} !important` }} xs={12}>
        <Typography variant="h5">Solid Cards</Typography>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardTwitter />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardFacebook />
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <CardLinkedIn />
      </Grid>
    </Grid>
  )
}

export default CardBasic
