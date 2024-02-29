import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './screens/Main';
import CustomDrawer from './ui/CustomDrawer';
import Group from './screens/Group';
import Settings from './screens/Settings';
import useLogin from './features/authentication/useLogin';
import AuthStack from './features/authentication/AuthStack';

const Drawer = createDrawerNavigator();

function AppStack() {
  const {profile} = useLogin();

  if (!profile?.user) {
    return <AuthStack />;
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Group" component={Group} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default AppStack;
