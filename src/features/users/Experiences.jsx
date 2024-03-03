import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleExperience from './SingleExperience';

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

export default function Experiences() {
  return (
    <FlatList
      style={{
        marginLeft: 20,
        marginRight: 20,
      }}
      data={data}
      renderItem={({item}) => <SingleExperience />}
      scrollEnabled={false}
    />
  );
}
