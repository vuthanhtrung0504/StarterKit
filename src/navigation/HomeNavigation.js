import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import { SCREEN_NAMES } from '../constants';

const HomeNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name={SCREEN_NAMES.HOME} component={Home} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
