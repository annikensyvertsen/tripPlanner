import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import trips from "../cabinTrips.json";
import { HomeStackParamList } from "../navigation/HomeStack";
import { buttonStyles, textStyles } from "../styles";
import { Colors } from "../utils/colors";
import CabinTripCard from "./CabinTripCard";

export default function CabinTrip() {
  const [cabinTrips, setCabinTrips] = useState<any | null>();

  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

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
      <View>
        <Pressable
          style={buttonStyles.primaryButton}
          onPress={() => navigation.navigate("CreateCabinTrip")}
        >
          <Text style={textStyles.primaryButtonText}>Opprett hyttetur</Text>
        </Pressable>
      </View>
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
