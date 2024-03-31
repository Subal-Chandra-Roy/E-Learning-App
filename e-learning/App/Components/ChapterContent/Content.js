import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import ContentItem from "./ContentItem";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
//import { ScrollView } from "react-native-gesture-handler";

export default function Content({ content }) {
  let contentRef;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const onNextBtnPress = (index) => {
    if (content?.length <= index + 1) {
      navigation.goBack();
      return;
    }
    setActiveIndex(index + 1);
    contentRef.scrollToIndex({ animated: true, index: index + 1 });
  };
  return (
    <View>
      <ProgressBar contentLength={content?.length} contentIndex={activeIndex} />
      <FlatList
        data={content}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={(ref) => {
          contentRef = ref;
        }}
        renderItem={({ item, index }) => (
          <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 22 }}>
              {item.heading}
            
            </Text>
            <ContentItem
              description={item?.description?.html}
              output={item?.output?.html}
            />
            <TouchableOpacity onPress={() => onNextBtnPress(index)} style={{marginTop:20}}>
              <Text
                style={{
                  backgroundColor: Colors.PRIMARY,
                  fontFamily: "outfit",
                  fontSize: 17,
                  color: Colors.WHITE,
                  padding: 10,
                  textAlign: "center",
                  borderRadius: 10,
                }}
              >
                {content?.length > index + 1 ? "Next" : "Finish"}
              </Text>
            </TouchableOpacity>
            
          </View>

        )}
      />
      
    </View>
  );
}
