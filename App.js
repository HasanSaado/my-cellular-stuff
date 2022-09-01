import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '@screens/Home';
import Contact from '@screens/Contact';
import Services from '@screens/Services';
import About from '@screens/About';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home'
                : 'md-home-outline';
            } else if (route.name === 'Services') {
              iconName = focused ? 'hammer' : 'hammer-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'mail' : 'mail-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            showLabel: false,
            tabBarActiveTintColor: '#ffd936',
          }}
        />
        <Tab.Screen
          name="Services"
          component={Services}
          options={{
            headerShown: false,
            showLabel: false,
            tabBarActiveTintColor: '#ffd936',
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
            showLabel: false,
            tabBarActiveTintColor: '#ffd936',
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            headerShown: false,
            showLabel: false,
            tabBarActiveTintColor: '#ffd936',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;