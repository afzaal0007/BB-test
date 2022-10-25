import React from 'react';
import { Provider as GraphQLProvider } from 'urql';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet';
import FlashMessage from 'react-native-flash-message';
import "react-native-gesture-handler";
import { createGraphQLClient } from './graphqlClient';
import store from 'storage/store'

import Navigation from './navigation';

EStyleSheet.build();

const App = () => {
  const graphQLClient = createGraphQLClient();

  return (
    <SafeAreaProvider>
      <GraphQLProvider value={graphQLClient}>
        <ReduxProvider store={store}>
          <Navigation />
          <FlashMessage position="top" />
        </ReduxProvider>
      </GraphQLProvider>
    </SafeAreaProvider>
  );
};

export default App;
