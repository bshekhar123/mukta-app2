import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DemoScreen from '../screens/DemoScreen';
import Splash from '../screens/Splash';
import LoginScreen from '../screens/Auth/LoginScreen';
import Profile from '../screens/AccountSetup/Profile';

const Stack = createNativeStackNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccountSetup" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Demo" component={DemoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
