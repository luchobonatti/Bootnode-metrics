import React, { ReactNode } from 'react'

import { ApolloProvider } from '@apollo/client'

import harvestClient from '@/src/graphql/clients/harvest-client'

const withHarvestClient =
  (Component: React.FC) =>
  ({ ...props }) =>
    (
      <ApolloProvider client={harvestClient}>
        <Component {...props} />
      </ApolloProvider>
    )

export default withHarvestClient
