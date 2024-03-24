import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CustomBackIcon({onPress}) {
  const navigation = useNavigation();
  const handler = onPress ? onPress : () => navigation.goBack();

  return (
    <TouchableOpacity onPress={handler}>
      <Image
        source={require('../../assets/icons/back.png')}
        style={{width: 20, height: 20}}
      />
    </TouchableOpacity>
  );
}
