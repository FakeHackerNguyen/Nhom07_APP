import {Image, TextInput, View} from 'react-native';
import React from 'react';

function Search({search, onSetIsFocusedSearch, isFocusedSearch, inputSearch}) {
  return (
    <View
      style={{
        width: !isFocusedSearch ? '65%' : '80%',
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
        ref={inputSearch}
        onFocus={() => onSetIsFocusedSearch(true)}
        style={{
          paddingLeft: 10,
          fontWeight: '500',
        }}
        placeholder="Search"
        placeholderTextColor="#5F6163"
        autoCapitalize="none"
        defaultValue={search}
      />
    </View>
  );
}

export default Search;
