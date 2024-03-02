import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import AuthProvider from './src/context/AuthContext';

function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
AppRegistry.registerComponent(appName, () => WrappedApp);
