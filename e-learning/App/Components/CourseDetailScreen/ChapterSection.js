import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function ChapterSection({chapterList}) {
  return (
    <View style={{backgroundColor:Colors.WHITE, padding:10, marginTop:15, borderRadius:15}}>
      <Text style={{fontFamily:'outfit-medium', fontSize:22}}>Chapters</Text>
      {chapterList.map((item, index)=>(
        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:10, borderWidth:1, borderRadius:10, marginTop:10, borderColor:'gray'}}>
          <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
            <Text style={{fontFamily:'outfit-medium', fontSize:27, color:'gray'}}>{index+1}</Text>
            <Text style={{fontFamily:'outfit', fontSize:21, color:'gray'}}>{item.title}</Text>
          </View>
          <View>
          <FontAwesome name="lock" size={25} color='gray' />
          </View>
        </View>
      ))}
    </View>
  )
}