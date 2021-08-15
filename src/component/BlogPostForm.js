import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TextInput, Button } from "react-native";

export default function BlogPostForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

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
