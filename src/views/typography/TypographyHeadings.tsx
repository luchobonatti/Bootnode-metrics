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

const TypographyHeadings = () => {
  return (
    <Card>
      <CardHeader title="Headings" titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>H1</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="h1">
              Heading 1
            </Typography>
            <Typography variant="body2">
              font-size: 96px / line-height: 112px / font-weight: 500
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>H2</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="h2">
              Heading 2
            </Typography>
            <Typography variant="body2">
              font-size: 60px / line-height: 72px / font-weight: 500
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>H3</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="h3">
              Heading 3
            </Typography>
            <Typography variant="body2">
              font-size: 48px / line-height: 56px / font-weight: 500
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>H4</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="h4">
              Heading 4
            </Typography>
            <Typography variant="body2">
              font-size: 32px / line-height: 40px / font-weight: 500
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>H5</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="h5">
              Heading 5
            </Typography>
            <Typography variant="body2">
              font-size: 24px / line-height: 32px / font-weight: 500
            </Typography>
          </DemoGrid>

          <Grid item sm={2} sx={{ display: 'flex', alignItems: 'center' }} xs={12}>
            <Typography>H6</Typography>
          </Grid>
          <DemoGrid item sm={10} xs={12}>
            <Typography sx={{ marginBottom: 2 }} variant="h6">
              Heading 6
            </Typography>
            <Typography variant="body2">
              font-size: 20px / line-height: 32px / font-weight: 500
            </Typography>
          </DemoGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TypographyHeadings
