import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CabinTripScreen from "../screens/CabinTripScreen";

export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
  CabinTrip: { id: string };
};
const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="CabinTrip"
        initialParams={{ id: "kk" }}
        component={CabinTripScreen}
      />
    </Stack.Navigator>
  );
}
