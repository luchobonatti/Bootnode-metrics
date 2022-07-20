// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types Imports
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

const CardStatsVertical = (props: CardStatsVerticalProps) => {
  // ** Props
  const { color, icon, stats, subtitle, title, trend, trendNumber } = props

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            marginBottom: 5.5,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Avatar
            sx={{
              boxShadow: 3,
              marginRight: 4,
              color: 'common.white',
              backgroundColor: `${color}.main`,
            }}
          >
            {icon}
          </Avatar>
          <IconButton
            aria-label="settings"
            className="card-more-options"
            size="small"
            sx={{ color: 'text.secondary' }}
          >
            <DotsVertical />
          </IconButton>
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{title}</Typography>
        <Box
          sx={{
            marginTop: 1.5,
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: 1.5,
            alignItems: 'flex-start',
          }}
        >
          <Typography sx={{ mr: 2 }} variant="h6">
            {stats}
          </Typography>
          <Typography
            component="sup"
            sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}
            variant="caption"
          >
            {trendNumber}
          </Typography>
        </Box>
        <Typography variant="caption">{subtitle}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive',
}
