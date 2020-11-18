import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Home from './screens/Home'
import Login from './screens/Login'


const Tabs = AnimatedTabBarNavigator();

export default function Tabbar() {
    return(
        
    <Tabs.Navigator
        // default configuration from React Navigation
        tabBarOptions={{
            activeTintColor: "#2F7C6E",
            inactiveTintColor: "#222222"
        }}
    >
 
    <Tabs.Screen name="Home" component={Home} />
    {/* <Tabs.Screen name="Login" component={Login} /> */}
 
  </Tabs.Navigator>
    )
}