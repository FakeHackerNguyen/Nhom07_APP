import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import CustomBackIcon from '../../ui/CustomBackIcon';
import Search from '../../ui/Search';

const Header = styled.View`
  height: 65px;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-around;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #e9e9e9;
`;
export default function HeaderProfile() {
  return (
    <Header>
      <CustomBackIcon />
      <Search />
      <TouchableOpacity>
        <Image source={require('../../../assets/icons/settings.png')} />
      </TouchableOpacity>
    </Header>
  );
}
