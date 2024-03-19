import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SingleConnection from '../features/network/SingleConnection';
import SearchConnection from '../features/network/SearchConnection';

const ConnectionScreen = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}>
      {showSearch && <SearchConnection onSetShowSearch={setShowSearch} />}
      {!showSearch && (
        <View
          style={{
            borderColor: '#e9e9e9',
            borderBottomWidth: 1,
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 70,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#666',
              fontWeight: '600',
            }}>
            2 connections
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 30,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setShowSearch(true)}>
              <Image source={require('../../assets/icons/lookup.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/icons/options.png')} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <FlatList s data={[1, 2]} renderItem={({item}) => <SingleConnection />} />
    </View>
  );
};

export default ConnectionScreen;
