// ** React Imports
import { ChangeEvent, MouseEvent, forwardRef, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import DatePicker from 'react-datepicker'

// ** Icons Imports

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} autoComplete="off" inputRef={ref} label="Birth Date" />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState<string[]>([])
  const [date, setDate] = useState<Date | null | undefined>(null)
  const [values, setValues] = useState<State>({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false,
  })

  // Handle Password
  const handlePasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }
  const handleMouseDownConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    setLanguage(event.target.value as string[])
  }

  return (
    <Card>
      <CardHeader
        title="Multi Column with Form Separator"
        titleTypographyProps={{ variant: 'h6' }}
      />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={(e) => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 600 }} variant="body2">
                1. Account Details
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField fullWidth label="Username" placeholder="carterLeonard" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                placeholder="carterleonard@gmail.com"
                type="email"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="form-layouts-separator-password">Password</InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                  id="form-layouts-separator-password"
                  label="Password"
                  onChange={handlePasswordChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="form-layouts-separator-password-2">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {values.showPassword2 ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                  id="form-layouts-separator-password-2"
                  label="Confirm Password"
                  onChange={handleConfirmChange('password2')}
                  type={values.showPassword2 ? 'text' : 'password'}
                  value={values.password2}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 600 }} variant="body2">
                2. Personal Info
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField fullWidth label="First Name" placeholder="Leonard" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField fullWidth label="Last Name" placeholder="Carter" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="form-layouts-separator-select-label">Country</InputLabel>
                <Select
                  defaultValue=""
                  id="form-layouts-separator-select"
                  label="Country"
                  labelId="form-layouts-separator-select-label"
                >
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Germany">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="form-layouts-separator-multiple-select-label">Language</InputLabel>
                <Select
                  id="form-layouts-separator-multiple-select"
                  input={<OutlinedInput id="select-multiple-language" label="Language" />}
                  labelId="form-layouts-separator-multiple-select-label"
                  multiple
                  onChange={handleSelectChange}
                  value={language}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="French">French</MenuItem>
                  <MenuItem value="Spanish">Spanish</MenuItem>
                  <MenuItem value="Portuguese">Portuguese</MenuItem>
                  <MenuItem value="Italian">Italian</MenuItem>
                  <MenuItem value="German">German</MenuItem>
                  <MenuItem value="Arabic">Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <DatePicker
                customInput={<CustomInput />}
                id="form-layouts-separator-date"
                onChange={(date: Date) => setDate(date)}
                placeholderText="MM-DD-YYYY"
                selected={date}
                showMonthDropdown
                showYearDropdown
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField fullWidth label="Phone No." placeholder="+1-123-456-8790" />
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size="large" sx={{ mr: 2 }} type="submit" variant="contained">
            Submit
          </Button>
          <Button color="secondary" size="large" variant="outlined">
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
