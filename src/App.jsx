import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Notifications from './ui/Toast';
import Home from './screens/HomeScreen/Home';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ForgotPassword from './screens/ForgotPasswordScreen/ForgotPassword';
import OTPVerification from './screens/ForgotPasswordScreen/OTPVerification';
import ConfirmPassword from './screens/ForgotPasswordScreen/ConfirmPassword';
import UserAddName from './screens/UserScreen/UserAddName';
import UserAddLocation from './screens/UserScreen/UserAddLocation';
import UserAddProfile from './screens/UserScreen/UserAddProfile';
import UserAddAvatar from './screens/UserScreen/UserAddAvatar';
import UserAddEmail from './screens/UserScreen/UserAddEmail';
import EmailVerification from './screens/UserScreen/EmailVerification';
import MainStack from './screens/MainScreen/MainStack';
import SettingScreen from './screens/SettingScreen';
import GroupScreen from './screens/GroupScreen';
import CreatePost from './features/posts/CreatePost';
import InvitationScreen from './screens/InvitationScreen';
import ManageNetworkScreen from './screens/ManageNetworkScreen';
import CustomBackIcon from './ui/CustomBackIcon';
import ConnectionScreen from './screens/ConnectionScreen';
import PeopleFollowScreen from './screens/PeopleFollowScreen';
import ForgotPasswordTabNavigator from './screens/ForgotPasswordScreen/ForgotPasswordTabNavigator';
import SignUpTabNavigator from './screens/UserScreen/SignUpTabNavigator';

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
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="forgot" component={ForgotPasswordTabNavigator} />
        <Stack.Screen name="signup" component={SignUpTabNavigator} />

        <Stack.Screen name="main" component={MainStack} />
        <Stack.Screen name="settings" component={SettingScreen} />
        <Stack.Screen name="group" component={GroupScreen} />
        <Stack.Screen name="create-post" component={CreatePost} />
        <Stack.Screen name="invitations" component={InvitationScreen} />
        <Stack.Screen
          name="manage-network"
          component={ManageNetworkScreen}
          options={{
            headerShown: true,
            title: 'Manage my network',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 20, fontWeight: '700'},
            headerLeft: () => <CustomBackIcon />,
          }}
        />
        <Stack.Screen
          name="connections"
          component={ConnectionScreen}
          options={{
            headerShown: true,
            title: 'Connections',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 20, fontWeight: '700'},
            headerLeft: () => <CustomBackIcon />,
          }}
        />
        <Stack.Screen
          name="following-peoples"
          component={PeopleFollowScreen}
          options={{
            headerShown: true,
            title: 'People | follow',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 20, fontWeight: '700'},
            headerLeft: () => <CustomBackIcon />,
          }}
        />
      </Stack.Navigator>
      <Notifications />
    </NavigationContainer>
  );
}
