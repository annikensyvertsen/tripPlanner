import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function CabinTripScreen() {
  console.log("cabintrip??");
  return (
    <View style={styles.container}>
      <Text> One cabin page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
