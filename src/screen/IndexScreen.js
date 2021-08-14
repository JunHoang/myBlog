import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-navigation";
import { useBlogContext } from "../context/BlogContext";

export default function IndexScreen() {
  const blogPosts = useBlogContext();

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
