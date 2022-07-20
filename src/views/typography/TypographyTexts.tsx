// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid, { GridProps } from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const DemoGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingTop: `${theme.spacing(1)} !important`,
  },
}))

const TypographyTexts = () => {
  return (
    <Card>
      <CardHeader title="Texts" titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>subtitle1</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="subtitle1">
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 16px / line-height: 28px / font-weight: 400
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>subtitle2</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="subtitle2">
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 14px / line-height: 21px / font-weight: 500
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>body1</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }}>
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 16px / line-height: 24px / font-weight: 400
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>body2</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="body2">
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography variant="body2">
              font-size: 14px / line-height: 21px / font-weight: 400
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>button</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography variant="button">Button Text</Typography>
            <Typography sx={{ mt: 2 }} variant="body2">
              font-size: 14px / line-height: 17px / font-weight: 500 / text-transform: uppercase
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>caption</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography variant="caption">
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography sx={{ mt: 2 }} variant="body2">
              font-size: 12px / line-height: 15px / font-weight: 400
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>overline</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography variant="overline">
              Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.
            </Typography>
            <Typography sx={{ mt: 1 }} variant="body2">
              font-size: 12px / line-height: 15px / font-weight: 400 / text-transform: uppercase
            </Typography>
          </DemoGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TypographyTexts
