import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home';
import Transaction from '../Transaction';
import Report from '../Report';

const Tab = createBottomTabNavigator();

const Router = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarStyle: {
          paddingBottom: 5, // Atur margin pada tab bar untuk layar "Profile"
        },
      }}
    />
    <Tab.Screen
      name="Transaction"
      component={Transaction}
      options={{
        tabBarStyle: {
          paddingBottom: 5, // Atur margin pada tab bar untuk layar "Profile"
        },
      }}
    />
    <Tab.Screen
      name="Report"
      component={Report}
      options={{
        tabBarStyle: {
          paddingBottom: 5, // Atur margin pada tab bar untuk layar "Profile"
        },
      }}
    />
  </Tab.Navigator>
);

export default Router;
