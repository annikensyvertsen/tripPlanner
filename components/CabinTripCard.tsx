import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { cardStyles, textStyles } from "../styles";

interface Props {
  cabinTrip: any;
}

export default function CabinTripCard(props: Props) {
  const { cabinTrip } = props;

  return (
    <View>
      <View style={cardStyles.primaryCard}>
        <Text style={textStyles.paragraph}>{cabinTrip.name}</Text>
        <Text style={textStyles.paragraph}>{cabinTrip.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
