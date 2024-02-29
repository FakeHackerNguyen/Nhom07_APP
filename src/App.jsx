import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Notifications from './ui/Toast';
import AuthStack from './features/authentication/AuthStack';
import AppStack from './navigations/AppStack';

export default function App() {
  SplashScreen.hide();

  // const config = {
  //   screens: {
  //     home: 'home',
  //     login: 'login',
  //     profile: 'profile',
  //     main: 'main',
  //     forgot: 'forgot',
  //     otp: 'otp',
  //     confirm: 'confirm',
  //     'signup-name': 'signup-name',
  //     'signup-email': 'signup-email',
  //     'signup-location': 'signup-location',
  //     'signup-profile': 'signup-profile',
  //     'signup-avatar': 'signup-avatar',
  //     'signup-verification': 'signup-verification',
  //   },
  // };

  // const linking = {
  //   prefixes: ['socialjob://', 'https://socialjob.com'],
  //   config,
  // };

  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
      <Notifications />
    </NavigationContainer>
  );
}
