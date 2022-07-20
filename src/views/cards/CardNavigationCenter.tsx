// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

const CardNavigationCenter = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList aria-label="card navigation example" centered onChange={handleChange}>
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
        <CardContent sx={{ textAlign: 'center' }}>
          <TabPanel sx={{ p: 0 }} value="1">
            <Typography sx={{ marginBottom: 2 }} variant="h6">
              Header One
            </Typography>
            <Typography sx={{ marginBottom: 4 }} variant="body2">
              Pudding tiramisu caramels. Gingerbread gummies danish chocolate bar toffee marzipan.
              Wafer wafer cake powder danish oat cake.
            </Typography>
            <Button variant="contained">Button One</Button>
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value="2">
            <Typography sx={{ marginBottom: 2 }} variant="h6">
              Header Two
            </Typography>
            <Typography sx={{ marginBottom: 4 }} variant="body2">
              Dragée chupa chups soufflé cheesecake jelly tootsie roll cupcake marzipan. Carrot cake
              sweet roll gummi bears caramels jelly beans.
            </Typography>
            <Button variant="contained">Button Two</Button>
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value="3">
            <Typography sx={{ marginBottom: 2 }} variant="h6">
              Header Three
            </Typography>
            <Typography sx={{ marginBottom: 4 }} variant="body2">
              Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert soufflé
              chocolate bar jujubes gummi bears lollipop.
            </Typography>
            <Button variant="contained">Button Three</Button>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default CardNavigationCenter
