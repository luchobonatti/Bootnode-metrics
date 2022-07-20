// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import CartPlus from 'mdi-material-ui/CartPlus'
import Facebook from 'mdi-material-ui/Facebook'
import GooglePlus from 'mdi-material-ui/GooglePlus'
import Linkedin from 'mdi-material-ui/Linkedin'
import ShareVariant from 'mdi-material-ui/ShareVariant'
import Twitter from 'mdi-material-ui/Twitter'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

const CardMobile = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              alt="Apple iPhone 11 Pro"
              height={176}
              src="/images/cards/iPhone-11-pro.png"
              width={137}
            />
          </CardContent>
        </StyledGrid>
        <Grid
          item
          md={7}
          sx={{
            paddingTop: ['0 !important', '0 !important', '1.5rem !important'],
            paddingLeft: ['1.5rem !important', '1.5rem !important', '0 !important'],
          }}
          xs={12}
        >
          <CardContent>
            <Typography sx={{ marginBottom: 2 }} variant="h6">
              Apple iPhone 11 Pro
            </Typography>
            <Typography sx={{ marginBottom: 3.5 }} variant="body2">
              Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13
              Bionic
            </Typography>
            <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
              Price:{' '}
              <Box component="span" sx={{ fontWeight: 'bold' }}>
                $899
              </Box>
            </Typography>
          </CardContent>
          <CardActions className="card-action-dense">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button>
                <CartPlus fontSize="small" sx={{ marginRight: 2 }} />
                Add to Card
              </Button>
              <IconButton
                aria-controls="long-menu"
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                aria-label="share"
                id="long-button"
                onClick={handleClick}
              >
                <ShareVariant fontSize="small" />
              </IconButton>
              <Menu
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                id="long-menu"
                onClose={handleClose}
                open={open}
              >
                <MenuItem onClick={handleClose}>
                  <Facebook />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Twitter />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Linkedin />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <GooglePlus />
                </MenuItem>
              </Menu>
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMobile
