import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import cabinTrips from "../cabinTrips.json";

export default function CabinTrip() {
  const { user } = useContext(AuthenticatedUserContext);

  const [cabinTrips, setCabinTrips] = useState(null);

  useEffect(() => {
    setCabinTrips(cabinTrips);
    console.log("cabintrips", cabinTrips);
  }, []);
  console.log("Hallo");
  return (
    <View style={styles.container}>
      <Text>One cabin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
