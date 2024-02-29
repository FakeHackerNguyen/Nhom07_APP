import {Image, Text, View} from 'react-native';
import React from 'react';
import icons from '../data/icon';

const SingleTab = ({size, color, type}) => {
  const icon = icons.find(i => i.id === type);
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      }}>
      <Image
        source={icon.image}
        style={{
          tintColor: color,
        }}
      />
      <Text
        style={{
          color: color,
          marginTop: 5,
          fontWeight: '500',
        }}>
        {icon.title}
      </Text>
    </View>
  );
};

export default SingleTab;
