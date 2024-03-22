import {FlatList, Text, View} from 'react-native';
import React from 'react';
import SingleFollowingPeople from '../features/network/SingleFollowingPeople';

function PeopleFollowScreen({route}) {
  const {following, count} = route.params;

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
          {count} person
        </Text>
      </View>
      <FlatList
        data={following}
        renderItem={({item}) => <SingleFollowingPeople following={item} />}
      />
    </View>
  );
}

export default PeopleFollowScreen;
