import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-navigation";
import { FontAwesome5 } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

export default function IndexScreen({ navigation }) {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <>
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
                  <FontAwesome5 name="trash-alt" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <FontAwesome5 style={styles.iconPlus} name="plus" />
      </TouchableOpacity>
    ),
  };
};

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
  iconPlus: {
    marginRight: 15,
    fontSize: 18,
  },
});
