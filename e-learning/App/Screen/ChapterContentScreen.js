import { View, Text, ToastAndroid } from "react-native";
import React, { useEffect } from "react";
import Content from "../Components/ChapterContent/Content";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MarkChapterCompleted } from "../Services";

export default function ChapterContentScreen() {
  const navigation = useNavigation();
  const param = useRoute().params;

  useEffect(() => {
    console.log("ChapterId", param.chapterId);
    console.log("RecordId", param.userCourseRecordId);

  },[param]);

  const onChapterFinish = () => {
    MarkChapterCompleted(param.chapterId, param.userCourseRecordId).then(resp=>{
      if(resp){
        ToastAndroid.show('Course Completed!!',ToastAndroid.LONG);
        navigation.goBack();
      }
    })
  };

  return (
    param.content && (
      <View>
        <Content
          content={param.content}
          onChapterFinish={() => onChapterFinish()}
        />
      </View>
    )
  );
}
