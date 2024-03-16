import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SingleInvitation from './SingleInvitation';

const Invitations = ({
  invitations,
  onRejectConnection,
  onConfirmConnection,
}) => {
  return (
    <FlatList
      style={{
        backgroundColor: '#fff',
        paddingBottom: 20,
      }}
      scrollEnabled={false}
      data={invitations}
      renderItem={({item}) => (
        <SingleInvitation
          invitation={item}
          onRejectConnection={onRejectConnection}
          onConfirmConnection={onConfirmConnection}
        />
      )}
    />
  );
};

export default Invitations;
