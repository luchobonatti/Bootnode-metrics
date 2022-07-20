// ** React Imports
import { ChangeEvent, ElementType, SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Link from '@mui/material/Link'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(
  ({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center',
    },
  }),
)

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
}))

const TabAccount = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState<boolean>(true)
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item sx={{ marginTop: 4.8, marginBottom: 3 }} xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled alt="Profile Pic" src={imgSrc} />
              <Box>
                <ButtonStyled
                  component="label"
                  htmlFor="account-settings-upload-image"
                  variant="contained"
                >
                  Upload New Photo
                  <input
                    accept="image/png, image/jpeg"
                    hidden
                    id="account-settings-upload-image"
                    onChange={onChange}
                    type="file"
                  />
                </ButtonStyled>
                <ResetButtonStyled
                  color="error"
                  onClick={() => setImgSrc('/images/avatars/1.png')}
                  variant="outlined"
                >
                  Reset
                </ResetButtonStyled>
                <Typography sx={{ marginTop: 5 }} variant="body2">
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField defaultValue="johnDoe" fullWidth label="Username" placeholder="johnDoe" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField defaultValue="John Doe" fullWidth label="Name" placeholder="John Doe" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              defaultValue="johnDoe@example.com"
              fullWidth
              label="Email"
              placeholder="johnDoe@example.com"
              type="email"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select defaultValue="admin" label="Role">
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="author">Author</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="maintainer">Maintainer</MenuItem>
                <MenuItem value="subscriber">Subscriber</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select defaultValue="active" label="Status">
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              defaultValue="ABC Pvt. Ltd."
              fullWidth
              label="Company"
              placeholder="ABC Pvt. Ltd."
            />
          </Grid>

          {openAlert ? (
            <Grid item sx={{ mb: 3 }} xs={12}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    onClick={() => setOpenAlert(false)}
                    size="small"
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                severity="warning"
                sx={{ '& a': { fontWeight: 400 } }}
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <Link href="/" onClick={(e: SyntheticEvent) => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button sx={{ marginRight: 3.5 }} variant="contained">
              Save Changes
            </Button>
            <Button color="secondary" type="reset" variant="outlined">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
