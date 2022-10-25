import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from 'screens/login';

const PublicStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default PublicStack;
