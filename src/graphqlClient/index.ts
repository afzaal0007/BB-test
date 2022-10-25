// https://formidable.com/open-source/urql/docs/api/urql/
import { createClient } from 'urql';
import { GRAPHQL_API_URL } from '@env'

export const createGraphQLClient = () => {
    return createClient({
        url: GRAPHQL_API_URL,
        fetchOptions: () => {
          // const token = getToken();
          return {
            // headers: { authorization: token ? `Bearer ${token}` : '' },
          };
        },
      });
}