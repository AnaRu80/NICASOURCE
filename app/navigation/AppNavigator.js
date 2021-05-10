import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import QrList from "../screens/QrList";
import ReadQr from "../screens/ReadQr";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "white",
      activeTintColor: "tomato",
      inactiveBackgroundColor: "white",
      inactiveTintColor: "grey",
    }}
  >
    <Tab.Screen
      name="QrRead"
      component={ReadQr}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="qrcode" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="QrList"
      component={QrList}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="view-list" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
