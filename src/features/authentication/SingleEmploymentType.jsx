import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const ModalText = styled.Text`
  color: #666;
  font-size: 20px;
  font-weight: 700;
  flex: 1;
`;

const CheckBoxContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

const CheckBox = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const InnerCircle = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #fff;
  position: absolute;
`;

function SingleEmploymentType({type, onHandleCheckBox, checked}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
      }}>
      <ModalText>{type}</ModalText>
      <View>
        <CheckBoxContainer onPress={() => onHandleCheckBox(type)}>
          <CheckBox
            style={{
              borderColor: checked === type ? 'green' : 'gray',
              backgroundColor: checked === type ? 'green' : 'transparent',
            }}>
            {checked === type && <InnerCircle />}
          </CheckBox>
        </CheckBoxContainer>
      </View>
    </View>
  );
}

export default SingleEmploymentType;
