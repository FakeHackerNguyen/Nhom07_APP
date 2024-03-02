import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLogin from '../features/authentication/useLogin';
import Search from '../ui/Search';
import BottomNavigation from '../ui/BottomNavigation';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Header({profile}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={{
            borderWidth: 1,
            borderColor: '#e9e9e9',
            borderRadius: 40,
            overflow: 'hidden',
            marginLeft: 20,
            width: 40,
            height: 40,
          }}
          source={{uri: profile?.user.authenticatedUser.avatar.url}}
        />
      </TouchableOpacity>
      <Search />
      <Image
        style={{
          marginRight: 20,
        }}
        source={require('../../assets/icons/chat.png')}
      />
    </View>
  );
}

function Main({navigation}) {
  const {profile} = useLogin();

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header profile={profile} />
      <BottomNavigation />
    </SafeAreaView>
  );
}

export default Main;
