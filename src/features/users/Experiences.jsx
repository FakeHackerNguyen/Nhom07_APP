import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SingleExperience from './SingleExperience';

export default function Experiences({
  data,
  onSetCurrentExperience,
  idCurrentExperience,
}) {
  return (
    <FlatList
      style={{
        marginLeft: 20,
        marginRight: 20,
      }}
      data={data}
      renderItem={({item}) => (
        <SingleExperience
          item={item}
          onSetCurrentExperience={onSetCurrentExperience}
          idCurrentExperience={idCurrentExperience}
        />
      )}
      scrollEnabled={false}
    />
  );
}
