import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { enrollCourse } from "../../Services";
import { getUserEnrolledCourses } from "../../Services";

export default function DetailSection({ course,enrollCourse, userEnrolledCourse }) {
  return (
    <View
      style={{ padding: 10, borderRadius: 15, backgroundColor: Colors.WHITE }}
    >
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.92,
          height: 190,
          borderRadius: 10,
        }}
      />
      <Text
        style={{ fontFamily: "outfit-medium", fontSize: 22, marginTop: 10 }}
      >
        {course.name}
      </Text>
      <View style={{gap:5, marginTop:5}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              fontFamily: "outfit",
            }}
          >
            <Ionicons name="book-outline" size={24} color="black" />
            <Text>{course.chapters.length + " Chapters"}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              fontFamily: "outfit",
            }}
          >
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>{course.time + " h"}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              fontFamily: "outfit",
            }}
          >
            <Ionicons name="person-circle-outline" size={24} color="black" />
            <Text>{course.author}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              fontFamily: "outfit",
            }}
          >
            <Ionicons name="cellular-outline" size={24} color="black" />
            <Text>{course.level}</Text>
          </View>
        </View>
        <View>
            <Text style={{fontFamily:'outfit-medium', fontSize:20}}> Description</Text>
            <Text style={{fontFamily:'outfit', color:'gray', lineHeight:20, textAlign:"justify"}}>{course.description.markdown}</Text>   
        </View>
        <View style={{display:'flex', flexDirection:'row', gap:5, justifyContent:'space-evenly'}}>
            
            {userEnrolledCourse?.length==0?<TouchableOpacity 
            onPress={()=>enrollCourse()}
            style={{backgroundColor:Colors.PRIMARY, borderRadius:15, justifyContent:'center', alignItems:'center', padding:15}}>
                <Text style={{fontFamily:'outfit', color:Colors.WHITE, textAlign:"center", fontSize:14}}> Enroll for free</Text>
            </TouchableOpacity>:null}
            <TouchableOpacity style={{backgroundColor:Colors.PRIMARY, borderRadius:15, justifyContent:'center', alignItems:'center', padding:15}}>
                <Text style={{fontFamily:'outfit', color:Colors.WHITE, textAlign:"center", fontSize:14}}> Membership $2.99/month</Text>
            </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}
