import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Row = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
`;

const StyledText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const Amount = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
`;

function ManageNetworkScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}>
      <Row onPress={() => navigation.navigate('connections')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 25,
          }}>
          <Image
            style={{
              tintColor: '#666',
            }}
            source={require('../../assets/icons/network.png')}
          />
          <StyledText>Connections</StyledText>
        </View>
        <Amount>0</Amount>
      </Row>
      <Row
        onPress={() => navigation.navigate('following-peoples')}
        style={{
          borderTopWidth: 1,
          borderColor: '#ddd',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 25,
          }}>
          <Image source={require('../../assets/icons/people.png')} />
          <StyledText>People | follow</StyledText>
        </View>
        <Amount>0</Amount>
      </Row>
    </View>
  );
}

export default ManageNetworkScreen;
