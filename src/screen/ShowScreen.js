import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

export default function ShowScreen({ navigation }) {
  const blogPostId = navigation.getParam("id");
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === blogPostId);
  console.log("state", state);

  return (
    <View>
      <Text>
        {blogPost.title} - {blogPostId}
      </Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  const blogPostId = navigation.getParam("id");
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit", { blogPostId })}
      >
        <FontAwesome5 style={styles.icon} name="pen" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
    fontSize: 18,
  },
});
