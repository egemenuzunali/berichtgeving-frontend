import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { endpoint, prodEndpoint } from './config';

const link = createHttpLink({
	uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
});

function createClient() {
	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});
}
export default createClient;
