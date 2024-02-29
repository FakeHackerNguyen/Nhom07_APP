import {Image, TextInput, View} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View
      style={{
        width: 280,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFF3F7',
      }}>
      <Image
        style={{
          marginLeft: 10,
          width: 15,
          height: 15,
          tintColor: '#676767',
        }}
        source={require('../../assets/icons/lookup.png')}
      />
      <TextInput
        style={{
          paddingLeft: 10,
          fontWeight: '500',
        }}
        placeholder="Search"
        placeholderTextColor="#5F6163"
        autoCapitalize="none"
      />
    </View>
  );
};

export default Search;
