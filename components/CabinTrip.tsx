import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import trips from "../cabinTrips.json";
import { Colors } from "../utils/colors";
import CabinTripCard from "./CabinTripCard";

export default function CabinTrip() {
  const [cabinTrips, setCabinTrips] = useState<any | null>();

  useEffect(() => {
    setCabinTrips(trips);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Kommende hytteturer</Text>
        <Text style={styles.numberOfTrips}>{cabinTrips?.length}</Text>
      </View>
      <ScrollView horizontal style={styles.cabinsWrapper}>
        {cabinTrips?.map((trip: any, index: number) => {
          return <CabinTripCard key={index} cabinTrip={trip} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-end",
  },
  cabinsWrapper: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  numberOfTrips: {
    fontSize: 16,
    color: Colors.grey1,
  },
});
