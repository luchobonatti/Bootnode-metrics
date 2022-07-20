// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth inputRef={ref} label="Birth Date" {...props} />
})

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState<Date | null | undefined>(null)

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item sx={{ marginTop: 4.8 }} xs={12}>
            <TextField
              defaultValue="The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scalable 😀, and lightning 😍 fast search and discovery experiences."
              fullWidth
              label="Bio"
              minRows={2}
              multiline
              placeholder="Bio"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <DatePickerWrapper>
              <DatePicker
                customInput={<CustomInput />}
                id="account-settings-date"
                onChange={(date: Date) => setDate(date)}
                placeholderText="MM-DD-YYYY"
                selected={date}
                showMonthDropdown
                showYearDropdown
              />
            </DatePickerWrapper>
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField fullWidth label="Phone" placeholder="(123) 456-7890" type="number" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              defaultValue="https://themeselection.com/"
              fullWidth
              label="Website"
              placeholder="https://example.com/"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select defaultValue="USA" label="Country">
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Germany">Germany</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-multiple-select-label">Languages</InputLabel>
              <Select
                defaultValue={['English']}
                id="account-settings-multiple-select"
                input={<OutlinedInput id="select-multiple-language" label="Languages" />}
                labelId="account-settings-multiple-select-label"
                multiple
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
            <FormControl>
              <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="male"
                name="account-settings-info-radio"
                row
              >
                <FormControlLabel control={<Radio />} label="Male" value="male" />
                <FormControlLabel control={<Radio />} label="Female" value="female" />
                <FormControlLabel control={<Radio />} label="Other" value="other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button sx={{ marginRight: 3.5 }} variant="contained">
              Save Changes
            </Button>
            <Button color="secondary" onClick={() => setDate(null)} type="reset" variant="outlined">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabInfo
