import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import useLogin from '../features/authentication/useLogin';

function CustomDrawer(props) {
  const {handleLogout, profile} = useLogin();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 20,
            marginTop: 20,
            gap: 10,
          }}>
          <Image
            style={{
              borderWidth: 1,
              borderColor: '#e9e9e9',
              borderRadius: 40,
              overflow: 'hidden',
              width: 70,
              height: 70,
            }}
            source={{uri: profile?.user.authenticatedUser.avatar.url}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {profile?.user.authenticatedUser.fullName}
          </Text>
          <View>
            <Text
              style={{
                color: '#666666',
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              View profile
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: '#EAEAEA',
          padding: 10,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 40,
        }}>
        <TouchableOpacity
          onPress={async () => {
            await handleLogout();
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawer;
