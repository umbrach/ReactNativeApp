import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import db from "../firebase/config";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PostsList from "../Components/PostsList";

const bg = require("../assets/images/Photo_BG.png");

export default function ProfileScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const { userId, name, avatar } = useSelector((state) => state.auth);

  const getUserPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <>
      <ImageBackground source={bg} style={styles.image}>
        <View style={styles.ProfileBox}>
          <View style={{ position: "absolute", top: -60, left: 128 }}>
            <View style={styles.avatar}>
              <Image
                source={{ uri: avatar }}
                style={{ width: 120, height: 120, borderRadius: 16 }}
              />
            </View>
          </View>
          <Text style={styles.name}>{name}</Text>
          <SafeAreaView>
            <PostsList state={posts} navigation={navigation} />
          </SafeAreaView>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  ProfileBox: {
    flex: 0.7,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 45,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  name: {
    fontFamily: "normal",
    fontWeight: "semiBold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
  },
  card: {
    marginBottom: 10,
    alignItems: "center",
  },
  description: {
    textAlign: "flex-start",
  },
  title: {
    fontFamily: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
    marginBottom: 10,
  },
  likes: {
    display: "flex",
    flexDirection: "row",
  },
});
