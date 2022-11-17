import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { HomeStackParamList } from "../navigation/HomeStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import trips from "../cabinTrips.json";
import { Colors } from "../utils/colors";

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
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{cabinTrip?.name}</Text>
        </View>
        <View style={styles.iconAndText}>
          <Ionicons name="location-outline" size={16} color={Colors.primary} />
          <Text style={styles.address}>{cabinTrip?.address}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.box}>
          <View style={styles.iconAndText}>
            <Ionicons
              style={styles.icon}
              name="calendar"
              size={22}
              color={Colors.primary}
            />
            <View>
              <Text>Dato</Text>
              <Text style={styles.date}>{cabinTrip?.startDate}</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.iconAndText}>
            <Ionicons
              style={styles.icon}
              name="ios-people"
              size={22}
              color={Colors.primary}
            />
            <View>
              <Text style={styles.date}>Gjester</Text>
              <View style={styles.members}>
                {cabinTrip?.members?.map((member: any, index: number) => {
                  return <Text key={index}>{member} </Text>;
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  iconAndText: {
    flexDirection: "row",
    alignContent: "center",
  },
  icon: {
    marginRight: 15,
    alignSelf: "center",
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "capitalize",
    margin: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    textTransform: "capitalize",
    marginLeft: 5,
  },
  box: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 10,
    width: 170,
    height: 75,
    margin: 20,
    padding: 20,
    justifyContent: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  members: {
    flexDirection: "row",
  },
});
