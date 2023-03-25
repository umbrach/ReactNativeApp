// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { StyleSheet, Button } from "react-native";

// import { Feather } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";

// import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen";
// import PostsScreen from "./Screens/PostsScreen";
// import CreatePostsScreen from "./Screens/CreatePostsScreen";
// import ProfileScreen from "./Screens/ProfileScreen";
// import HomeScreen from "./Screens/Home";

// const AuthStack = createNativeStackNavigator();
// const MainTab = createBottomTabNavigator();

// export const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator>
//         <AuthStack.Screen
//           options={{ headerShown: false }}
//           name="Login"
//           component={LoginScreen}
//         />
//         <AuthStack.Screen
//           options={{ headerShown: false }}
//           name="Register"
//           component={RegistrationScreen}
//         />
//         <AuthStack.Screen name="Home" component={HomeScreen} />
//       </AuthStack.Navigator>
//     );
//   }

//   return (
//     <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
//       <MainTab.Screen
//         name="Posts"
//         component={PostsScreen}
//         options={{
//           tabBarIcon: ({ focused, size, color }) => {
//             return <Feather name="grid" size={size} color="#212121" />;
//           },
//           headerRight: () => (
//             <MaterialIcons
//               name="logout"
//               size={24}
//               color="#BDBDBD"
//               style={styles.logoutBtn}
//               onPress={() => alert("This is a button!")}
//             />
//           ),
//         }}
//       ></MainTab.Screen>
//       <MainTab.Screen
//         name="Create"
//         component={CreatePostsScreen}
//         options={{
//           tabBarIcon: ({ focused, size, color }) => {
//             return (
//               <Feather
//                 name="plus"
//                 size={size}
//                 color="white"
//                 style={styles.iconPlus}
//               />
//             );
//           },
//         }}
//       ></MainTab.Screen>
//       <MainTab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ focused, size, color }) => {
//             return <Feather name="user" size={size} color="#212121" />;
//           },
//         }}
//       ></MainTab.Screen>
//     </MainTab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   logoutBtn: {
//     marginRight: 16,
//   },
//   iconPlus: {
//     paddingVertical: 9,
//     paddingHorizontal: 28.5,
//     textAlign: "center",
//     backgroundColor: "#FF6C00",
//     borderRadius: 20,
//   },
// });

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import HomeScreen from "./Screens/Home";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen name="Map" component={HomeScreen} />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: 80 } }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Feather name="grid" size={size} color="#212121" />;
          },
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={styles.logout}
              onPress={() => alert("This is a button!")}
            />
          ),
        }}
      />

      <MainTab.Screen
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="plus"
              size={size}
              color="white"
              style={styles.iconAdd}
            />
          ),
        }}
        name="Create Post"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Feather name="user" size={size} color="#212121" />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  logout: { paddingRight: 12 },
  iconAdd: {
    paddingVertical: 9,
    paddingHorizontal: 28.5,
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
});
