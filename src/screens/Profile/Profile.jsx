import React from 'react';
import {Text, View} from 'react-native';
import useLogin from '../../features/authentication/useLogin';

function Profile() {
  const {handleLogin, isLoading} = useLogin();
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

export default Profile;
