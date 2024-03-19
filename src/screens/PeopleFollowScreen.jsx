import {FlatList, Text, View} from 'react-native';
import React from 'react';
import SingleFollowingPeople from '../features/network/SingleFollowingPeople';

function PeopleFollowScreen() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          borderColor: '#e9e9e9',
          borderBottomWidth: 1,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#666',
            fontWeight: '600',
          }}>
          2 person
        </Text>
      </View>
      <FlatList
        data={[1, 2]}
        renderItem={({item}) => <SingleFollowingPeople />}
      />
    </View>
  );
}

export default PeopleFollowScreen;
