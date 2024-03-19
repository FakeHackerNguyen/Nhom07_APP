import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Posts from '../../features/posts/Posts';
import NetworkScreen from '../NetworkScreen';
import CreatePost from '../../features/posts/CreatePost';
import NotificationScreen from '../NotificationScreen';
import Jobs from '../../features/jobs/Jobs';
import SingleTab from './SingleTab';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#ffffff',
          elevation: 0,
          height: 80,
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'home') {
            return (
              <SingleTab
                type="home"
                color={focused ? '#000' : '#8C8C8C'}
                selected={focused}
              />
            );
          } else if (route.name === 'network') {
            return (
              <SingleTab
                type="network"
                color={focused ? '#000' : '#8C8C8C'}
                selected={focused}
              />
            );
          } else if (route.name === 'post') {
            return (
              <SingleTab
                type="post"
                color={focused ? '#000' : '#8C8C8C'}
                selected={focused}
              />
            );
          } else if (route.name === 'notification') {
            return (
              <SingleTab
                type="notification"
                color={focused ? '#000' : '#8C8C8C'}
                selected={focused}
              />
            );
          } else if (route.name === 'job') {
            return (
              <SingleTab
                type="job"
                color={focused ? '#000' : '#8C8C8C'}
                selected={focused}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="home" component={Posts} />
      <Tab.Screen name="network" component={NetworkScreen} />
      <Tab.Screen
        name="post"
        component={CreatePost}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('create-post');
          },
        })}
      />
      <Tab.Screen name="notification" component={NotificationScreen} />
      <Tab.Screen name="job" component={Jobs} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
