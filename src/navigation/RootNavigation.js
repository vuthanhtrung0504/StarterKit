import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { SCREEN_NAMES } from '../constants';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
