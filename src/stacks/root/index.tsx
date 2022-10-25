import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppInitializationScreen from 'screens/appInitialization';
import PrivateStack from 'stacks/private';
import PublicStack from 'stacks/public';

const RootStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AppInitialization"
        component={AppInitializationScreen}
      />
      <Stack.Screen name="PublicStack" component={PublicStack} />
      <Stack.Screen name="PrivateStack" component={PrivateStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
