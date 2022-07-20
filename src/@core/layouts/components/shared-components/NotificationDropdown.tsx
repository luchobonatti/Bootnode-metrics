// ** React Imports
import { Fragment, ReactNode, SyntheticEvent, useState } from 'react'

// ** MUI Imports
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import MuiMenu, { MenuProps } from '@mui/material/Menu'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { Theme, styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Icons Imports
import BellOutline from 'mdi-material-ui/BellOutline'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'

// ** Styled Menu component
const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: 380,
    overflow: 'hidden',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  '& .MuiMenu-list': {
    padding: 0,
  },
}))

// ** Styled MenuItem component
const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const styles = {
  maxHeight: 349,
  '& .MuiMenuItem-root:last-of-type': {
    border: 0,
  },
}

// ** Styled PerfectScrollbar component
const PerfectScrollbar = styled(PerfectScrollbarComponent)({
  ...styles,
})

// ** Styled Avatar component
const Avatar = styled(MuiAvatar)<AvatarProps>({
  width: '2.375rem',
  height: '2.375rem',
  fontSize: '1.125rem',
})

// ** Styled component for the title in MenuItems
const MenuItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  flex: '1 1 100%',
  overflow: 'hidden',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  marginBottom: theme.spacing(0.75),
}))

// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = styled(Typography)<TypographyProps>({
  flex: '1 1 100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})

const NotificationDropdown = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)

  // ** Hook
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  const ScrollWrapper = ({ children }: { children: ReactNode }) => {
    if (hidden) {
      return <Box sx={{ ...styles, overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return (
        <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>
          {children}
        </PerfectScrollbar>
      )
    }
  }

  return (
    <Fragment>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleDropdownOpen}
      >
        <BellOutline />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={handleDropdownClose}
        open={Boolean(anchorEl)}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem disableRipple>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>Notifications</Typography>
            <Chip
              color="primary"
              label="8 New"
              size="small"
              sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500, borderRadius: '10px' }}
            />
          </Box>
        </MenuItem>
        <ScrollWrapper>
          <MenuItem onClick={handleDropdownClose}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Avatar alt="Flora" src="/images/avatars/4.png" />
              <Box
                sx={{
                  mx: 4,
                  flex: '1 1',
                  display: 'flex',
                  overflow: 'hidden',
                  flexDirection: 'column',
                }}
              >
                <MenuItemTitle>Congratulation Flora! 🎉</MenuItemTitle>
                <MenuItemSubtitle variant="body2">
                  Won the monthly best seller badge
                </MenuItemSubtitle>
              </Box>
              <Typography sx={{ color: 'text.disabled' }} variant="caption">
                Today
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleDropdownClose}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ color: 'common.white', backgroundColor: 'primary.main' }}>VU</Avatar>
              <Box
                sx={{
                  mx: 4,
                  flex: '1 1',
                  display: 'flex',
                  overflow: 'hidden',
                  flexDirection: 'column',
                }}
              >
                <MenuItemTitle>New user registered.</MenuItemTitle>
                <MenuItemSubtitle variant="body2">5 hours ago</MenuItemSubtitle>
              </Box>
              <Typography sx={{ color: 'text.disabled' }} variant="caption">
                Yesterday
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleDropdownClose}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Avatar alt="message" src="/images/avatars/5.png" />
              <Box
                sx={{
                  mx: 4,
                  flex: '1 1',
                  display: 'flex',
                  overflow: 'hidden',
                  flexDirection: 'column',
                }}
              >
                <MenuItemTitle>New message received 👋🏻</MenuItemTitle>
                <MenuItemSubtitle variant="body2">You have 10 unread messages</MenuItemSubtitle>
              </Box>
              <Typography sx={{ color: 'text.disabled' }} variant="caption">
                11 Aug
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleDropdownClose}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <img alt="paypal" height={38} src="/images/misc/paypal.png" width={38} />
              <Box
                sx={{
                  mx: 4,
                  flex: '1 1',
                  display: 'flex',
                  overflow: 'hidden',
                  flexDirection: 'column',
                }}
              >
                <MenuItemTitle>Paypal</MenuItemTitle>
                <MenuItemSubtitle variant="body2">Received Payment</MenuItemSubtitle>
              </Box>
              <Typography sx={{ color: 'text.disabled' }} variant="caption">
                25 May
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleDropdownClose}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Avatar alt="order" src="/images/avatars/3.png" />
              <Box
                sx={{
                  mx: 4,
                  flex: '1 1',
                  display: 'flex',
                  overflow: 'hidden',
                  flexDirection: 'column',
                }}
              >
                <MenuItemTitle>Revised Order 📦</MenuItemTitle>
                <MenuItemSubtitle variant="body2">New order revised from john</MenuItemSubtitle>
              </Box>
              <Typography sx={{ color: 'text.disabled' }} variant="caption">
                19 Mar
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleDropdownClose}>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <img alt="chart" height={38} src="/images/misc/chart.png" width={38} />
              <Box
                sx={{
                  mx: 4,
                  flex: '1 1',
                  display: 'flex',
                  overflow: 'hidden',
                  flexDirection: 'column',
                }}
              >
                <MenuItemTitle>Finance report has been generated</MenuItemTitle>
                <MenuItemSubtitle variant="body2">25 hrs ago</MenuItemSubtitle>
              </Box>
              <Typography sx={{ color: 'text.disabled' }} variant="caption">
                27 Dec
              </Typography>
            </Box>
          </MenuItem>
        </ScrollWrapper>
        <MenuItem
          disableRipple
          sx={{
            py: 3.5,
            borderBottom: 0,
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Button fullWidth onClick={handleDropdownClose} variant="contained">
            Read All Notifications
          </Button>
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default NotificationDropdown
