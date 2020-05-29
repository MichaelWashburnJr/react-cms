import { STRAPI_API_URL } from '../constants/settings';
import { withApollo } from 'next-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: `${STRAPI_API_URL}/graphql`,
  cache: new InMemoryCache()
});

export default withApollo(apolloClient)