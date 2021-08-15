import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ navigation }) {
  const blogPostId = navigation.getParam("id");
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === blogPostId);

  return (
    <View>
      <Text>
        {blogPost.title} - {blogPostId}
      </Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
