import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import trips from "../cabinTrips.json";
import CabinTripCard from "../components/CabinTripCard";
import { cardStyles, textStyles } from "../styles";
import { Cabin } from "../types";

export default function CabinTrip() {
  const [cabinTrips, setCabinTrips] = useState<any | null>();

  useEffect(() => {
    setCabinTrips(trips);
    console.log("cabintrips", trips);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Kommende hytteturer</Text>
      {cabinTrips?.map((trip: any) => {
        return <CabinTripCard cabinTrip={trip} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
