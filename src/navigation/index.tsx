import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from 'stacks/root';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
