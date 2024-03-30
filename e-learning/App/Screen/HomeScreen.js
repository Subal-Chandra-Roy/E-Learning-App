import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen/CourseList'

export default function HomeScreen() {
  

  
  return (
    <View>
        <View style={{backgroundColor:Colors.PRIMARY, height:250, padding:20 }}>
            <Header/>
        </View>
        <View style={{padding:20, marginTop:-90}}>
          <CourseList level={'Basic'}/>
          <CourseList level={'Advance'}/>
        </View>
          
      
    </View>
  )
}