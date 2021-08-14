import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-navigation";
import { useBlogContext } from "../context/BlogContext";

export default function IndexScreen() {
  const { blogPosts, addBlogPost } = useBlogContext();

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add new blog post" onPress={() => addBlogPost()} />
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
