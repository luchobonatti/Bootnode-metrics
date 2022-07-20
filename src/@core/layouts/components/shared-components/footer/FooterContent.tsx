// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component="span" sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <Link href="https://themeselection.com/" target="_blank">
          ThemeSelection
        </Link>
      </Typography>
      {hidden ? null : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            '& :not(:last-child)': { mr: 4 },
          }}
        >
          <Link
            href="https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/blob/main/LICENSE"
            target="_blank"
          >
            MIT License
          </Link>
          <Link href="https://themeselection.com/" target="_blank">
            More Themes
          </Link>
          <Link
            href="https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/blob/main/README.md"
            target="_blank"
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/issues"
            target="_blank"
          >
            Support
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
