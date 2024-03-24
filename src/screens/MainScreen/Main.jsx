import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLogin from '../../features/authentication/useLogin';
import Search from '../../ui/Search';
import BottomNavigation from './BottomNavigation';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomBackIcon from '../../ui/CustomBackIcon';

function Header({profile, isFocusedSearch, onSetIsFocusedSearch}) {
  const navigation = useNavigation();
  const inputSearch = useRef(null);

  function outFocus() {
    inputSearch.current.blur();
    onSetIsFocusedSearch(false);
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: !isFocusedSearch && 'space-between',
        alignItems: 'center',
        gap: isFocusedSearch && 20,
        height: 70,
      }}>
      {!isFocusedSearch ? (
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
      ) : (
        <View
          style={{
            marginLeft: 20,
          }}>
          <CustomBackIcon onPress={outFocus} />
        </View>
      )}
      <Search
        onSetIsFocusedSearch={onSetIsFocusedSearch}
        isFocusedSearch={isFocusedSearch}
        inputSearch={inputSearch}
      />
      {!isFocusedSearch ? (
        <Image
          style={{
            marginRight: 20,
          }}
          source={require('../../../assets/icons/chat.png')}
        />
      ) : null}
    </View>
  );
}

export default function Main({navigation}) {
  const [isFocusedSearch, setIsFocusedSearch] = useState(false);
  const {profile} = useLogin();

  useEffect(() => {
    if (!profile?.user) {
      navigation.closeDrawer();
      navigation.navigate('login');
    }
  }, [profile]);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header
        profile={profile}
        isFocusedSearch={isFocusedSearch}
        onSetIsFocusedSearch={setIsFocusedSearch}
      />
      <BottomNavigation />
    </SafeAreaView>
  );
}
