import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../Services'
import SubHeading from './SubHeading';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({level}) {
  
  const navigation = useNavigation();
  const [courseList,setCourseList] = useState([]);
  useEffect(()=>{
    getCourses();
  },[])

  const getCourses=()=>{
    getCourseList(level).then(resp=>{
      console.log("RESP", resp);
      setCourseList(resp?.courses);
    })
  }
  
  return (
    <View>
      <SubHeading text={level+' Courses'}color={level=='Basic'&&Colors.WHITE}/>
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('CourseDetail')}>
            <View style={{padding:10, backgroundColor:Colors.WHITE, marginRight:15, marginBottom:10, borderRadius:15}}>
              <Image source={{uri:item?.banner?.url}}
              style={{width:210, height:110, borderRadius:5}}
              />
              <View style={{padding:7}}>
                <Text style={{fontFamily:'outfit-medium', fontSize:17}}>{item.name}</Text>
              </View>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{display:'flex', flexDirection:'row',alignItems:'center', marginTop:5, gap:5,marginLeft:7}}>
                  <Ionicons name="book-outline" size={18} color="black"/>
                  <Text style={{fontFamily:'outfit'}}>{item.chapters?.length} Chapters</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row',alignItems:'center', marginTop:5, gap:5,marginLeft:7}}>
                  <Ionicons name="time-outline" size={18} color="black"/>
                  <Text style={{fontFamily:'outfit'}}>{item.time} h</Text>
                </View>
                
              </View>
              
                <Text style={{marginTop:5, marginLeft:5, fontFamily:'outfit-medium', color:Colors.PRIMARY}}> {item.price==0?'Free':item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}