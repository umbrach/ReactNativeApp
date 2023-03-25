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
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const bg = require("../assets/images/Photo_BG.png");
const foto1 = require("../assets/images/Rectangle_23.jpg");
const foto2 = require("../assets/images/Rectangle_24.jpg");
const foto3 = require("../assets/images/Rectangle_25.jpg");

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "Ліс",
    comments: 8,
    likes: 153,
    location: "Ukraine",
    image: foto1,
  },
  {
    id: "4116-jfk5-43rh",
    title: "Захід на Чорному морі",
    comments: 3,
    likes: 153,
    location: "Ukraine",
    image: foto2,
  },
  {
    id: "4d16-5tt5-4j55",
    title: "Старий будиночок у Венеції",
    comments: 50,
    likes: 153,
    location: "Italy",
    image: foto3,
  },
];

export default function ProfileScreen({ navigation }) {
  const [courses, setCourses] = useState(COURSES);

  return (
    <>
      <ImageBackground source={bg} style={styles.image}>
        <View style={styles.ProfileBox}>
          <View style={{ position: "absolute", top: -60, left: 128 }}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/User.jpg")}
                style={{ width: 120, height: 120 }}
              />
            </View>
          </View>
          <Text style={styles.name}>Natali Romanova</Text>
          <SafeAreaView>
            <FlatList
              style={styles.list}
              data={courses}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Image source={item.image} />
                    <View style={styles.description}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ display: "flex", flexDirection: "row" }}>
                        <View style={styles.likes}>
                          <FontAwesome
                            name="comment"
                            size={24}
                            color="#FF6C00"
                          />
                          <Text
                            style={{
                              fontFamily: "normal",
                              fontSize: 16,
                              lineHeight: 19,
                              color: "#212121",
                              paddingBottom: 35,
                              marginLeft: 9,
                              marginRight: 27,
                            }}
                          >
                            {item.comments}
                          </Text>
                        </View>
                        <View style={styles.likes}>
                          <AntDesign name="like2" size={24} color="#FF6C00" />
                          <Text
                            style={{
                              fontFamily: "normal",
                              fontSize: 16,
                              lineHeight: 19,
                              color: "#212121",
                              marginLeft: 9,
                            }}
                          >
                            {item.likes}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.likes}>
                        <Ionicons
                          name="location-outline"
                          size={24}
                          color="#BDBDBD"
                        />
                        <Text
                          style={{
                            fontFamily: "normal",
                            fontSize: 16,
                            lineHeight: 19,
                            color: "#212121",
                            textDecorationLine: "underline",
                            marginLeft: 9,
                          }}
                        >
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
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
