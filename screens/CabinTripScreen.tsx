import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { HomeStackParamList } from "../navigation/HomeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import trips from "../cabinTrips.json";

type Props = NativeStackScreenProps<HomeStackParamList, "CabinTrip", "MyStack">;

export default function CabinTripScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const [cabinTrip, setCabinTrip] = useState<any | null>();

  useEffect(() => {
    trips.forEach((trip) => {
      if (trip.id === id) {
        setCabinTrip(trip);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{cabinTrip?.name}</Text>
      <View style={styles.iconAndText}>
        <Ionicons name="location-outline" size={22} color="hotpink" />
        <Text>{cabinTrip?.address}</Text>
      </View>
      <View style={styles.iconAndText}>
        <Ionicons name="calendar" size={22} color="hotpink" />
        <Text>{cabinTrip?.startDate}</Text>
      </View>
      <View style={styles.iconAndText}>
        <Ionicons name="ios-people" size={22} color="hotpink" />
        {cabinTrip?.members?.map((member: any, index: number) => {
          return <Text key={index}>{member}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconAndText: {
    flexDirection: "row",
    alignContent: "flex-end",
  },
});
