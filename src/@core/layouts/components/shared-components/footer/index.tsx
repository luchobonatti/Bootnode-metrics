// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// ** Type Import
import FooterContent from './FooterContent'
import { Settings } from 'src/@core/context/settingsContext'

// ** Footer Content Component

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
}

const Footer = (props: Props) => {
  // ** Props
  const { footerContent: userFooterContent, settings } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { contentWidth } = settings

  return (
    <Box
      className="layout-footer"
      component="footer"
      sx={{
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        className="footer-content-container"
        sx={{
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }),
        }}
      >
        {userFooterContent ? userFooterContent(props) : <FooterContent />}
      </Box>
    </Box>
  )
}

export default Footer
