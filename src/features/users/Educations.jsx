import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleEducation from './SingleEducation';

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

export default function Educations() {
  return (
    <FlatList
      style={{
        marginLeft: 20,
        marginRight: 20,
      }}
      data={data}
      renderItem={({items}) => <SingleEducation />}
      scrollEnabled={false}
    />
  );
}
