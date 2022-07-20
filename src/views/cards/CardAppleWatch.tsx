// ** MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const CardAppleWatch = () => {
  return (
    <Card>
      <CardMedia image="/images/cards/watch-on-hand.jpg" sx={{ height: '9.375rem' }} />
      <CardContent sx={{ padding: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography sx={{ marginBottom: 2 }} variant="h6">
          Apple Watch
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>$249.40</Typography>
        <Typography variant="body2">
          3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
        </Typography>
      </CardContent>
      <Button
        sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        variant="contained"
      >
        Add To Cart
      </Button>
    </Card>
  )
}

export default CardAppleWatch
