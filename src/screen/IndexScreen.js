import React, { useContext } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

export default function IndexScreen({ navigation }) {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <>
      <Button
        title="Add new blog post"
        onPress={() => navigation.navigate("Create")}
      />
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome
                    name="trash-o"
                    size={24}
                    color="black"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 26,
  },
});
