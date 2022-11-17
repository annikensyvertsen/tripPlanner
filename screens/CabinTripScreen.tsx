import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { HomeStackParamList } from "../navigation/HomeStack";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = NativeStackScreenProps<HomeStackParamList, "CabinTrip", "MyStack">;

export default function CabinTripScreen({ route, navigation }: Props) {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text> Title</Text>
      <View>
        <Ionicons name="location-outline" size={32} color="hotpink" />
        <Text>Address</Text>
      </View>
      <View>
        <Ionicons name="calendar" size={32} color="hotpink" />
        <Text>Date</Text>
      </View>
      <View>
        <Ionicons name="ios-people" size={32} color="hotpink" />
        <Text>Members</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
