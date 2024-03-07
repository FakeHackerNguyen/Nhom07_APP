import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleEducation from './SingleEducation';

export default function Educations({
  data,
  onSetCurrentEducation,
  idCurrentEducation,
}) {
  return (
    <FlatList
      style={{
        marginLeft: 20,
        marginRight: 20,
      }}
      data={data}
      renderItem={({item}) => (
        <SingleEducation
          item={item}
          onSetCurrentEducation={onSetCurrentEducation}
          idCurrentEducation={idCurrentEducation}
        />
      )}
      scrollEnabled={false}
    />
  );
}
