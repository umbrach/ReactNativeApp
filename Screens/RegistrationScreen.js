import { useState, useEffect } from "react";
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

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

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
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    console.log(state);
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
            style={{
              ...styles.box,
              paddingBottom: isShowKeyboard ? 32 : 78,
            }}
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
                <Text style={styles.title}>Registration</Text>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: loginFocus ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Login"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsShowKeyboard(true), setLoginFocus(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevstate) => ({ ...prevstate, login: value }))
                  }
                  onBlur={() => setLoginFocus(false)}
                  value={state.login}
                />
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
                  onPress={() => { keyboardHide(false); navigation.navigate('Home')}}
                >
                  <Text style={styles.btnTitle}>Registration</Text>
                </TouchableOpacity>
                <Text style={styles.login}>
                  Already have an account?
                  <Text
                    style={styles.login}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Sign in
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
    flex: 0.75,
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
    color: "#fff",
    textAlign: "center",
  },
  login: {
    color: "#1B4371",
    fontFamily: "Roboto-regular",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 45,
  },
});
