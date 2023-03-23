import { Text, View, StyleSheet } from "react-native";

// const COURSES = [
//   {
//     id: "45k6-j54k-4jth",
//     title: "Natali Romanova",
//     email: "email@example.com",
//   },
//   {
//     id: "4116-jfk5-43rh",
//     title: "Natali Romanova",
//     email: "email@example.com",
//   },
//   {
//     id: "4d16-5tt5-4j55",
//     title: "Natali Romanova",
//     email: "email@example.com",
//   },
//   {
//     id: "LG16-ant5-0J25",
//     title: "Natali Romanova",
//     email: "email@example.com",
//   },
// ];


export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>Posts Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
