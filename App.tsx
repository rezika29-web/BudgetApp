import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SlideShow from './components/SlideShow';
import Register from './components/Register';
import Login from './components/Login';
import Router from './components/elements/Router';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SlideShow">
          <Stack.Screen name="SlideShows" component={SlideShow} />
          <Stack.Screen name="Router" component={Router} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
