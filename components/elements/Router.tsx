import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home';
import Transaction from '../Transaction';
import Report from '../Report';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import images from '../../assets/image';
import { Image } from 'react-native';

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
        tabBarIcon: ({ color, size }) => (
          <Image source={images.home} style={{height:20, width:20}} />
        ),
      }}
    />
    <Tab.Screen
      name="Transaction"
      component={Transaction}
      options={{
        tabBarStyle: {
          paddingBottom: 5, // Atur margin pada tab bar untuk layar "Profile"
        },
        tabBarIcon: ({ color, size }) => (
          <Image source={images.money} style={{height:20, width:20}} />
        ),
      }}
    />
    <Tab.Screen
      name="Report"
      component={Report}
      options={{
        tabBarStyle: {
          paddingBottom: 5, // Atur margin pada tab bar untuk layar "Profile"
        },
        
        tabBarIcon: ({ color, size }) => (
          <Image source={images.grafik} style={{height:20, width:20}} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Router;
