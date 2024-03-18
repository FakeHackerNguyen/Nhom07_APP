import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Notifications from './ui/Toast';
import Home from './screens/Home/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import ForgotPassword from './screens/ForgotPassword/ForgotPassword';
import OTPVerification from './screens/ForgotPassword/OTPVerification';
import ConfirmPassword from './screens/ForgotPassword/ConfirmPassword';
import UserAddName from './screens/Users/UserAddName';
import UserAddLocation from './screens/Users/UserAddLocation';
import UserAddProfile from './screens/Users/UserAddProfile';
import UserAddAvatar from './screens/Users/UserAddAvatar';
import UserAddEmail from './screens/Users/UserAddEmail';
import EmailVerification from './screens/Users/EmailVerification';
import MainStack from './screens/Main/MainStack';
import Settings from './screens/Settings';
import Group from './screens/Group';
import CustomBackIcon from './ui/CustomBackIcon';
import HeaderProfile from './features/users/HeaderProfile';
import CreatePost from './features/posts/CreatePost';
import InvitationScreen from './screens/InvitationScreen';
import HeaderInvitations from './features/network/HeaderInvitations';

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="profile" component={Profile} />

        <Stack.Screen name="forgot" component={ForgotPassword} />
        <Stack.Screen name="otp" component={OTPVerification} />
        <Stack.Screen name="confirm" component={ConfirmPassword} />

        <Stack.Screen name="signup-name" component={UserAddName} />
        <Stack.Screen name="signup-email" component={UserAddEmail} />
        <Stack.Screen name="signup-location" component={UserAddLocation} />
        <Stack.Screen name="signup-profile" component={UserAddProfile} />
        <Stack.Screen name="signup-avatar" component={UserAddAvatar} />
        <Stack.Screen
          name="signup-verification"
          component={EmailVerification}
        />

        <Stack.Screen name="main" component={MainStack} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="group" component={Group} />
        <Stack.Screen name="create-post" component={CreatePost} />
        <Stack.Screen name="invitations" component={InvitationScreen} />
      </Stack.Navigator>
      <Notifications />
    </NavigationContainer>
  );
}
