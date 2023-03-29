// import { StyleSheet, View } from "react-native";
// import { useCallback } from "react";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import Main from "./Components/Main";

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//     <Provider store={store}>
//       <View style={styles.container} onLayout={onLayoutRootView}>
//         <Main />
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });

import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { Provider } from "react-redux";

import Main from "./Components/Main";
import { store } from "./redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Main />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
