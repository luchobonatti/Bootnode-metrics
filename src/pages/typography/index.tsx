// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TypographyHeadings from 'src/views/typography/TypographyHeadings'
import TypographyTexts from 'src/views/typography/TypographyTexts'

const TypographyPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TypographyHeadings />
      </Grid>
      <Grid item xs={12}>
        <TypographyTexts />
      </Grid>
    </Grid>
  )
}

export default TypographyPage
