import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SinglePost from './SinglePost';

const data = [
  {
    id: 1,
  },
  // {
  //   id: 2,
  // },
  // {
  //   id: 3,
  // },
  // {
  //   id: 4,
  // },
  // {
  //   id: 5,
  // },
  // {
  //   id: 6,
  // },
  // {
  //   id: 7,
  // },
  // {
  //   id: 8,
  // },
  // {
  //   id: 9,
  // },
  // {
  //   id: 10,
  // },
  // {
  //   id: 11,
  // },
  // {
  //   id: 12,
  // },
  // {
  //   id: 13,
  // },
];

function Posts() {
  return (
    <FlatList data={data} renderItem={({item}) => <SinglePost item={item} />} />
  );
}

export default Posts;
