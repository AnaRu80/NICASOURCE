import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import QrList from '../screens/QrList';
import ReadQr from '../screens/ReadQr';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'white',
      activeTintColor: 'tomato',
      inactiveBackgroundColor: 'white',
      inactiveTintColor: 'grey',
    }}
  >
    <Tab.Screen
      name="Scan"
      component={ReadQr}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="qrcode" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Codes"
      component={QrList}
      options={{
        unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="view-list"
            color={color}
            size={size}
          />
        ),
      }}
      // listeners={({ navigation }) => ({
      //   blur: () => navigation.setParams({ screen: undefined }),
      // })}
    />
  </Tab.Navigator>
);

export default AppNavigator;
