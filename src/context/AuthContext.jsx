import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import toast from 'react-hot-toast/headless';

import {checkAuth, login, logout} from '../services/apiAuth';

const AuthContext = createContext();

const defaultAuthInfo = {
  isLoading: false,
  error: '',
  profile: null,
};

export default function AuthProvider({children}) {
  const [authInfo, setAuthInfo] = useState(defaultAuthInfo);
  console.log('authInfo: ', authInfo);

  async function handleLogin({email, password}) {
    setAuthInfo({profile: null, isLoading: true, error: ''});
    const {data, errorMessage} = await login({email, password});
    if (errorMessage) {
      setAuthInfo({profile: null, error: errorMessage, isLoading: false});
      toast(errorMessage, {type: 'error'});
    } else {
      await AsyncStorage.setItem('accessToken', data.accessToken);
      setAuthInfo({profile: data, isLoading: false, error: ''});
    }
  }

  async function handleLogout() {
    setAuthInfo({profile: null, isLoading: true, error: ''});
    const {errorMessage} = await logout();
    if (errorMessage) {
      setAuthInfo({...authInfo, error: errorMessage, isLoading: false});
      toast(errorMessage, {type: 'error'});
    } else {
      toast('Logged out successfully', {type: 'success'});
      await AsyncStorage.removeItem('accessToken');
      setAuthInfo({profile: null, isLoading: false, error: ''});
    }
  }

  useEffect(function () {
    async function auth() {
      setAuthInfo({profile: null, isLoading: true, error: ''});
      const {data, errorMessage} = await checkAuth();

      if (errorMessage) {
        setAuthInfo({profile: null, error: errorMessage, isLoading: false});
      } else {
        setAuthInfo({profile: data, isLoading: false, error: ''});
      }
    }

    auth();
  }, []);

  return (
    <AuthContext.Provider value={{authInfo, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
