import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../component/BlogPostForm";

import { Context } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.goBack());
      }}
    />
  );
}

const styles = StyleSheet.create({});
