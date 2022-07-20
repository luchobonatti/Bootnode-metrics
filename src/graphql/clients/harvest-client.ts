import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const HARVEST_ACCOUNT_ID = '1441396'
const HARVEST_ACCESS_TOKEN =
  '2917092.pt.pwj-cCkdeIHLk_bBJXAG8-i-KABkILLIEedGu8S3TedOOvbnW9WVhuwzkfN0rnwqanSiQYgo1Vuj1i36q0Dwaw'

// Set `RestLink` with your endpoint
const restLink = new RestLink({
  uri: 'https://api.harvestapp.com/v2/',
  headers: {
    'Harvest-Account-Id': HARVEST_ACCOUNT_ID,
    Authorization: `Bearer ${HARVEST_ACCESS_TOKEN}`,
  },
})

// Setup your client
const harvestClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
})

export default harvestClient
