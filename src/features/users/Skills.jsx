import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
const Skills = () => {
  return (
    <>
      <FlatList
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}
        data={data}
        renderItem={({items}) => (
          <>
            <View
              style={{
                borderBottomColor: '#EAEAEA',
                borderBottomWidth: 1,
                paddingVertical: 15,
                flexDirection: 'row',
                gap: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                }}>
                Public Speaking
              </Text>
            </View>
          </>
        )}
        scrollEnabled={false}
      />
      <TouchableOpacity
        style={{
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#666',
          }}>
          Show all skills
        </Text>
        <Image source={require('../../../assets/icons/next.png')} />
      </TouchableOpacity>
    </>
  );
};

export default Skills;
