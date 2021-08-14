import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useBlogContext } from "../context/BlogContext";

export default function IndexScreen() {
  const value = useBlogContext();

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
