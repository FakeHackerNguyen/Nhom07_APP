import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import Login from '../../screens/Login';
import Profile from '../../screens/Profile';
import Main from '../../screens/Main';
import ForgotPassword from '../../screens/ForgotPassword/ForgotPassword';
import OTPVerification from '../../screens/ForgotPassword/OTPVerification';
import ConfirmPassword from '../../screens/ForgotPassword/ConfirmPassword';
import UserAddName from '../../screens/Users/UserAddName';
import UserAddLocation from '../../screens/Users/UserAddLocation';
import UserAddProfile from '../../screens/Users/UserAddProfile';
import UserAddAvatar from '../../screens/Users/UserAddAvatar';
import UserAddEmail from '../../screens/Users/UserAddEmail';
import EmailVerification from '../../screens/Users/EmailVerification';
import Home from '../../screens/Home';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="main" component={Main} />

      <Stack.Screen name="forgot" component={ForgotPassword} />
      <Stack.Screen name="otp" component={OTPVerification} />
      <Stack.Screen name="confirm" component={ConfirmPassword} />

      <Stack.Screen name="signup-name" component={UserAddName} />
      <Stack.Screen name="signup-email" component={UserAddEmail} />
      <Stack.Screen name="signup-location" component={UserAddLocation} />
      <Stack.Screen name="signup-profile" component={UserAddProfile} />
      <Stack.Screen name="signup-avatar" component={UserAddAvatar} />
      <Stack.Screen name="signup-verification" component={EmailVerification} />
    </Stack.Navigator>
  );
};

export default AuthStack;
