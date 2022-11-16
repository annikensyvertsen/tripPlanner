import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button as RNButton } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { PrimaryButton, InputField, ErrorMessage } from "../components";
import Firebase from "../config/firebase";
import { TextInput } from "react-native-gesture-handler";

const auth = Firebase.auth();

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Signup", "MyStack">;

export default function SignupScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [signupError, setSignupError] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    console.log("SIGNUP");
    try {
      console.log("In try", email, password);
      if (email !== "" && password !== "") {
        console.log("in if", email, password);
        await auth.createUserWithEmailAndPassword(email, password);
      }
    } catch (error: any) {
      setSignupError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Create new account</Text>
      <TextInput
        style={{
          fontSize: 14,
          backgroundColor: "#fff",
          marginBottom: 20,
          padding: 10,
        }}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text: string) => {
          console.log("text,", text);
          setEmail(text);
        }}
      />
      <TextInput
        style={{
          fontSize: 14,
          backgroundColor: "#fff",
          marginBottom: 20,
          padding: 10,
        }}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType="password"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />
      {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
      <PrimaryButton
        onPress={onHandleSignup}
        backgroundColor="#f57c00"
        title="Signup"
        titleColor="#fff"
        titleSize={20}
        containerStyle={{
          marginBottom: 24,
        }}
      />
      <RNButton
        onPress={() => navigation.navigate("Login")}
        title="Go to Login"
        color="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e93b81",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 24,
  },
});
