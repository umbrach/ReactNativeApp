import { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

import { authSignInUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("register state", state);
    dispatch(authSignInUser(state));
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/Photo_BG.png")}
          style={styles.image}
        >
          <View
            style={{ ...styles.box, paddingBottom: isShowKeyboard ? 32 : 78 }}
          >
            <View style={{ position: "absolute", marginBottom: 32, top: -60 }}>
              <View style={styles.avatar}>
                <AntDesign
                  style={styles.addIcon}
                  name="pluscircleo"
                  size={25}
                  color="#FF6C00"
                />
              </View>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={{ ...styles.form, width: dimensions }}>
                <Text style={styles.title}>Login</Text>
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: emailFocus ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Email address"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => {
                      setIsShowKeyboard(true), setEmailFocus(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevstate) => ({ ...prevstate, email: value }))
                    }
                    onBlur={() => setEmailFocus(false)}
                    value={state.email}
                  />
                </View>
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: passwordFocus ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={true}
                    onFocus={() => {
                      setIsShowKeyboard(true), setPasswordFocus(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevstate) => ({
                        ...prevstate,
                        password: value,
                      }))
                    }
                    onBlur={() => setPasswordFocus(false)}
                    value={state.password}
                  />
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btnTitle}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.login}>
                  Don't have an account?
                  <Text
                    style={styles.login}
                    onPress={() => navigation.navigate("Register")}
                  >
                    Sign up
                  </Text>
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  box: {
    flex: 0.6,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "relative",
  },
  addIcon: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-medium",
    fontSize: 30,
    fontWeight: "medium",
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-regular",
    fontSize: 16,
    color: "#212121",
    padding: 16,
    marginBottom: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    width: 343,
    marginTop: 27,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto-regular",
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
    textAlign: "center",
  },
  login: {
    color: "#1B4371",
    fontFamily: "Roboto-regular",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 45,
  },
});

// import { StatusBar } from "expo-status-bar";
// import ToastManager, { Toast } from "toastify-react-native";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   Platform,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Button,
// } from "react-native";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authSignInUser } from "../redux/auth/authOperations";

// const bg = require("../assets/images/bg.jpg");

// const initialState = {
//   email: "",
//   password: "",
// };

// export default function LoginScreen({ navigation }) {
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
//   const [state, setState] = useState(initialState);
//   const [isPasswordSecure, setIsPasswordSecure] = useState(true);
//   const [passwordFocus, setPasswordFocus] = useState(false);
//   const [emailFocus, setEmailFocus] = useState(false);

//   const dispatch = useDispatch();

//   const changeIsPasswordSecure = () => {
//     setIsPasswordSecure(!isPasswordSecure);
//   };

//   const keyboardHide = () => {
//     setIsShowKeyboard(false);
//     Keyboard.dismiss();
//   };

//   const handleSubmit = () => {
//     if (state.name === "" || state.email === "" || state.password === "") {
//       Toast.error("all fields must be filled");
//       return;
//     }

//     if (state.email.includes("@")) {
//       setIsShowKeyboard(false);
//       Keyboard.dismiss();
//       dispatch(authSignInUser(state));
//       console.log(state);
//       setState(initialState);

//       // navigation.navigate("Home");

//       return;
//     }

//     Toast.error('Email must have "@"');
//   };

//   return (
//     <TouchableWithoutFeedback onPress={keyboardHide}>
//       <View style={styles.container}>
//         <ImageBackground source={bg} style={styles.image}>
//           <ToastManager
//             hasBackdrop={true}
//             duration={2000}
//             backdropColor={"red"}
//           />
//           <View
//             style={{
//               ...styles.registerBox,
//               paddingBottom: isShowKeyboard ? 32 : 144,
//             }}
//           >
//             <KeyboardAvoidingView
//               behavior={Platform.OS === "ios" ? "padding" : "height"}
//             >
//               <View style={styles.form}>
//                 <Text style={styles.title}>Log In</Text>

//                 <TextInput
//                   style={{
//                     ...styles.input,
//                     borderColor: emailFocus ? "#FF6C00" : "#E8E8E8",
//                   }}
//                   value={state.email}
//                   placeholder={"Email"}
//                   onFocus={() => {
//                     setIsShowKeyboard(true);
//                     setEmailFocus(true);
//                   }}
//                   onBlur={() => setEmailFocus(false)}
//                   onChangeText={(value) =>
//                     setState((prev) => ({ ...prev, email: value }))
//                   }
//                 />
//                 <TextInput
//                   style={{
//                     ...styles.input,
//                     borderColor: passwordFocus ? "#FF6C00" : "#E8E8E8",
//                   }}
//                   secureTextEntry={isPasswordSecure}
//                   value={state.password}
//                   placeholder={"Password"}
//                   onFocus={() => {
//                     setIsShowKeyboard(true);
//                     setPasswordFocus(true);
//                   }}
//                   onBlur={() => setPasswordFocus(false)}
//                   onChangeText={(value) =>
//                     setState((prev) => ({ ...prev, password: value }))
//                   }
//                 />
//                 <Text
//                   style={styles.swowPassword}
//                   onPress={changeIsPasswordSecure}
//                 >
//                   {isPasswordSecure ? "Show" : "Hide"}
//                 </Text>
//               </View>

//               <TouchableOpacity
//                 onPress={handleSubmit}
//                 activeOpacity={0.7}
//                 style={styles.btn}
//               >
//                 <Text style={styles.btnText}>Log In</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate("Register")}
//                 activeOpacity={0.5}
//               >
//                 <Text style={styles.login}>Don't have an account? Sign Up</Text>
//               </TouchableOpacity>
//             </KeyboardAvoidingView>
//           </View>
//         </ImageBackground>
//         <StatusBar style="auto" />
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//   },
//   registerBox: {
//     backgroundColor: "#fff",
//     flex: 0.45,
//   },
//   title: {
//     marginTop: 32,
//     marginBottom: 33,
//     fontFamily: "medium",
//     fontSize: 30,
//     lineHeight: 35,
//     textAlign: "center",
//     letterSpacing: 0.01,
//     color: "#212121",
//   },
//   form: {
//     marginHorizontal: 16,
//   },
//   input: {
//     marginBottom: 16,
//     fontSize: 16,
//     lineHeight: 19,
//     fontFamily: "normal",
//     color: "#BDBDBD",
//     padding: 16,
//     backgroundColor: "#F6F6F6",
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     borderRadius: 8,
//   },
//   password: {
//     position: "relative",
//   },
//   swowPassword: {
//     position: "absolute",
//     top: 200,
//     right: 32,
//     color: "#1B4371",
//     fontFamily: "normal",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   btn: {
//     alignItems: "center",
//     marginHorizontal: 16,
//     marginTop: 27,
//     marginBottom: 16,
//     paddingHorizontal: 32,
//     paddingVertical: 16,
//     backgroundColor: "#FF6C00",
//     borderRadius: 100,
//   },
//   btnText: {
//     color: "#FFFFFF",
//     fontFamily: "normal",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   login: {
//     color: "#1B4371",
//     fontFamily: "normal",
//     fontSize: 16,
//     lineHeight: 19,
//     textAlign: "center",
//   },
// });