// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'
import Menu from 'mdi-material-ui/Menu'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, saveSettings, settings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <Box className="actions-left" sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color="inherit"
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Magnify fontSize="small" />
              </InputAdornment>
            ),
          }}
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
        />
      </Box>
      <Box className="actions-right" sx={{ display: 'flex', alignItems: 'center' }}>
        {hiddenSm ? null : (
          <Box
            component="a"
            href="https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free"
            rel="noreferrer"
            sx={{ mr: 4, display: 'flex' }}
            target="_blank"
          >
            <img
              alt="github stars"
              height={24}
              src="https://img.shields.io/github/stars/themeselection/materio-mui-react-nextjs-admin-template-free?style=social"
            />
          </Box>
        )}
        <ModeToggler saveSettings={saveSettings} settings={settings} />
        <NotificationDropdown />
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
