import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-navigation";
import { Context } from "../context/BlogContext";

export default function IndexScreen() {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add new blog post" onPress={() => addBlogPost()} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
