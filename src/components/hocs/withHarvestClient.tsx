import harvestClient from '@/src/graphql/clients/harvest-client'
import { ApolloProvider } from '@apollo/client'
import React, { ReactNode } from 'react'

const withHarvestClient =
  (Component: React.FC) =>
  ({ ...props }) =>
    (
      <ApolloProvider client={harvestClient}>
        <Component {...props} />
      </ApolloProvider>
    )

export default withHarvestClient
