import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourseScreen from '../Screen/MyCourseScreen';
import LeaderBoardScreen from '../Screen/LeaderBoardScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name ='Home' component={HomeScreen} options={{tabBarIcon:({color,size})=> <Ionicons name="home" size={24} color={color} />}}/>
        <Tab.Screen name ='My Courses' component={MyCourseScreen} options={{tabBarIcon:({color,size})=> <Ionicons name="book" size={24} color={color} />}}/>
        <Tab.Screen name ='Leaderboard' component={LeaderBoardScreen} options={{tabBarIcon:({color,size})=> <MaterialIcons name="leaderboard" size={24} color={color} />}}/>
        <Tab.Screen name ='Profile' component={ProfileScreen} options={{tabBarIcon:({color,size})=> <FontAwesome name="user-circle-o" size={24} color={color} />}}/>
    </Tab.Navigator>
  )
}