import { View, Text, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RenderHtml from "react-native-render-html";
import Colors from "../../Utils/Colors";
export default function ContentItem({ description, output }) {
  const { width } = useWindowDimensions();
  const [isRun, setIsRun] = useState(false);
  const descriptionSource = {
    html: description,
  };
  const outputSource={
    html: output,
  }
  return (
    description && (
      <View>
        <RenderHtml 
        contentWidth={width} 
        source={descriptionSource} 
        tagsStyles={tagsStyles}
        />

        {output!=null?<TouchableOpacity
        onPress={()=>setIsRun(true)}
        style={{marginTop:-20, marginBottom:20}}>
          <Text style={{padding:10, backgroundColor:Colors.PRIMARY, borderRadius:10, fontFamily:'outfit', fontSize:15, color:Colors.WHITE, textAlign:'center', width:100}}>Run</Text>
        </TouchableOpacity>:null}
         {isRun? 
         <>
         <Text style={{fontFamily:'outfit-medium', fontSize:17, marginBottom:10}}>Output</Text>
          <RenderHtml 
          contentWidth={width} 
          source={outputSource} 
          tagsStyles={outputStyle}
          />
          </>
          :null}
        
      </View>
    )
  );
}

const tagsStyles = {
  body: {
    fontFamily: "outfit",
    fontSize: 17,
  },
  code:{
    backgroundColor:Colors.BLACK,
    color:Colors.WHITE,
    padding:20,
    borderRadius:15,
  }

};
const outputStyle = {
  body: {
    fontFamily: "outfit",
    fontSize: 17,
    backgroundColor:Colors.BLACK,
    color:Colors.WHITE,
    padding:20,
    borderRadius:15,
  },
  code:{
    backgroundColor:Colors.BLACK,
    color:Colors.WHITE,
    padding:20,
    borderRadius:15,
  }

};
