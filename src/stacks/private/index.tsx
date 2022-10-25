import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppInitialization from 'screens/appInitialization';

const PrivateStack = () => {
  const Stack = createBottomTabNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AppInitialization} />
    </Stack.Navigator>
  );
};

export default PrivateStack;
