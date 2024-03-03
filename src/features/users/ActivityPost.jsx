import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleActivityPost from './SingleActivityPost';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

export default function ActivityPost() {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <SingleActivityPost item={item} />}
      scrollEnabled={false}
      style={{
        marginLeft: 20,
        marginRight: 20,
      }}
    />
  );
}
