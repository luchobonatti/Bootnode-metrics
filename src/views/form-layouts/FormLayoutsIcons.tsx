// ** MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import Phone from 'mdi-material-ui/Phone'

const FormLayoutsIcons = () => {
  return (
    <Card>
      <CardHeader title="Basic with Icons" titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountOutline />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                label="Full Name"
                placeholder="Leonard Carter"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutline />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                helperText="You can use letters, numbers & periods"
                label="Email"
                placeholder="carterleonard@gmail.com"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                label="Phone No."
                placeholder="+1-123-456-8790"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageOutline />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                label="Message"
                minRows={3}
                multiline
                placeholder="Bio..."
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button size="large" type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsIcons
