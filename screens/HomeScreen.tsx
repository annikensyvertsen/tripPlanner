import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import CabinTrip from "./CabinTrip";

const auth = Firebase.auth();
type StackParamList = {
  Home: undefined;
  Profile: undefined;
};

type Props = NativeStackScreenProps<StackParamList, "Home", "Profile">;

export default function HomeScreen({ navigation }: Props) {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoToProfile = () => {
    console.log("profile");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.row}>
        <CabinTrip />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate("Profile")}
          title="Go to profile"
        />
      </View>
    </View>
  );
}

{
  /* <IconButton
          color="#fff"
          size={24}
          onPress={handleSignOut}
          name="logout"
        /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
  },
});
