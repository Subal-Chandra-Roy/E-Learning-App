import { View, Text, TouchableOpacity, ScrollView,ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import DetailSection from "../Components/CourseDetailScreen/DetailSection";
import ChapterSection from "../Components/CourseDetailScreen/ChapterSection";
import { enrollCourse, getUserEnrolledCourses } from "../Services";
import { useUser } from "@clerk/clerk-expo";

export default function CourseDetailScreen() {
  const navigate = useNavigation();
  const params = useRoute().params;
  const {user} = useUser();
  const [userEnrolledCourse, setUserEnrolledCourse]=useState([]);
  
  useEffect(() => {
    console.log(params.course);
    if(user&&params.course){
      GetUserEnrolledCourses();
    }
  }, [params.course, user]);
  

  const UserEnrolledCourse=()=>{
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      console.log("--",resp);
      if(resp){
        ToastAndroid.show('Course Enrolled successfully!', ToastAndroid.LONG);
        GetUserEnrolledCourses();
      }
    })

  }

  const GetUserEnrolledCourses=()=>{
    getUserEnrolledCourses(params.course.id, user.primaryEmailAddress.emailAddress)
    .then(resp=>{
      console.log("--", resp.userEnrolledCourses);
      setUserEnrolledCourse(resp.userEnrolledCourses);
    })
  }

  return (
    params.course && (
      <ScrollView style={{ padding: 5 }}>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <DetailSection course={params.course} enrollCourse={()=>UserEnrolledCourse()} userEnrolledCourse={userEnrolledCourse} />
        <ChapterSection chapterList={params.course.chapters} userEnrolledCourse={userEnrolledCourse}/>
      </ScrollView>
    )
  );
}
