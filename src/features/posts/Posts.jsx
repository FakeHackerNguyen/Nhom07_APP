import React, {useState} from 'react';
import {FlatList} from 'react-native';
import SinglePost from './SinglePost';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
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
  const [scroll, setScroll] = useState(true);
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <SinglePost item={item} onSetScroll={setScroll} />
      )}
      scrollEnabled={scroll}
    />
  );
}

export default Posts;
