import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CustomBackIcon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/icons/back.png')}
        style={{width: 20, height: 20}}
      />
    </TouchableOpacity>
  );
}
