import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { HomeStackParamList } from "../navigation/HomeStack";
import { cardStyles, textStyles } from "../styles";
import { Colors } from "../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  cabinTrip: any;
}

export default function CabinTripCard(props: Props) {
  const { cabinTrip } = props;

  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CabinTrip", { id: cabinTrip.id });
      }}
    >
      <View style={cardStyles.primaryCard}>
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require("../assets/cab.jpeg")}
            />
            <View style={styles.dateWrapper}>
              <Text style={styles.day}>23</Text>
              <Text style={styles.month}>mars</Text>
            </View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{cabinTrip.name}</Text>
            <View style={styles.textAndIcon}>
              <Ionicons name="location-outline" size={12} color="hotpink" />

              <Text style={styles.adress}>{cabinTrip.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dateWrapper: {
    borderRadius: 5,
    width: 50,
    height: 50,
    backgroundColor: Colors.white,
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    bottom: 10,
    left: 10,
    padding: 2,
  },
  imageWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  day: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  month: {
    fontSize: 12,
    textAlign: "center",
  },
  textWrapper: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 5,
  },
  adress: {
    fontSize: 12,
    textTransform: "capitalize",
    marginLeft: 5,
  },
  textAndIcon: {
    flexDirection: "row",
  },
});
