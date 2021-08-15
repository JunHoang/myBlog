import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import BlogPostForm from "../component/BlogPostForm";
import { Context } from "../context/BlogContext";

export default function EditScreen({ navigation }) {
  const blogPostId = navigation.getParam("blogPostId");

  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === blogPostId);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(blogPostId, title, content, () => navigation.goBack());
      }}
    />
  );
}

const styles = StyleSheet.create({});
