import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { Context } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(value) => setContent(value)}
      />
      <Button
        title="Save"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.goBack();
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});
