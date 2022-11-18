import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { InputField } from "../components";
import CabinTrip from "../components/CabinTrip";
import { HomeStackParamList } from "../navigation/HomeStack";
import { Colors } from "../utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Calendar,
  CalendarList,
  Agenda,
  DateData,
} from "react-native-calendars";

export default function CabinTripScreen() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const twoDaysFromNow = new Date().setDate(new Date().getDate() + 2);
  const [endDate, setEndDate] = useState(
    new Date(twoDaysFromNow).toISOString().slice(0, 10)
  );
  const [description, setDescription] = useState("");
  const [guests, setGuests] = useState([]);
  const [fields, setFields] = useState([]);
  const [image, setImage] = useState("");

  const [shouldDisplayFromCalendar, setShouldDisplayFromCalendar] =
    useState(false);
  const [shouldDisplayToCalendar, setShouldDisplayToCalendar] = useState(false);

  const checkDates = (selectedDate: DateData, isToDate: boolean) => {
    let today = new Date();
    let timeStampSelectedDate = new Date(selectedDate.timestamp);
    let timeStampFromDate = new Date(startDate);
    let timeStampToDate = new Date(endDate);

    //if to day is sat to a date that if before from date, or has already passed
    // set to two days after from date
    if (!isToDate) {
      if (
        timeStampSelectedDate < today ||
        timeStampSelectedDate > timeStampToDate
      ) {
        timeStampToDate.setDate(timeStampFromDate.getDate() + 2);
        let isoStringDate = timeStampToDate.toISOString().slice(0, 10);
        setEndDate(isoStringDate);
        setStartDate(selectedDate.dateString);
      } else {
        setStartDate(selectedDate.dateString);
      }
    }
    if (isToDate) {
      if (
        timeStampSelectedDate < today ||
        timeStampSelectedDate < timeStampFromDate
      ) {
        timeStampToDate.setDate(timeStampFromDate.getDate() + 2);
        let isoStringDate = timeStampToDate.toISOString().slice(0, 10);
        setEndDate(isoStringDate);
        setStartDate(selectedDate.dateString);
      } else {
        setEndDate(selectedDate.dateString);
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Opprett hyttetur</Text>
        </View>
        <View style={styles.inputFields}>
          <View style={styles.inputFieldWrapper}>
            <Text style={styles.inputLabel}>Navn</Text>
            <TextInput
              style={styles.inputField}
              placeholder={"Trysiltur"}
              value={name}
              onChangeText={(value) => setName(value)}
            />
          </View>

          <View style={styles.inputFieldWrapper}>
            <Text style={styles.inputLabel}>Adresse</Text>
            <TextInput
              style={styles.inputField}
              placeholder={"Vestsidevegen 12-18, 2420 Trysil"}
              value={address}
              onChangeText={(address) => setAddress(address)}
            />
          </View>

          <View style={styles.inputFieldWrapper}>
            <Text style={styles.inputLabel}>Dato</Text>

            <View style={styles.dateFields}>
              <View style={styles.dateField}>
                <Pressable
                  onPress={() => {
                    setShouldDisplayFromCalendar(!shouldDisplayFromCalendar);
                    setShouldDisplayToCalendar(false);
                  }}
                  style={styles.dateInputField}
                >
                  {startDate.length < 1 ? (
                    <Text style={styles.placeholderText}>Fra</Text>
                  ) : (
                    <Text>{startDate}</Text>
                  )}
                  <View style={styles.iconWrapper}>
                    <Ionicons
                      name="calendar"
                      size={14}
                      color={Colors.primary}
                    />
                  </View>
                </Pressable>
              </View>

              <View style={styles.dateField}>
                <Pressable
                  onPress={() => {
                    setShouldDisplayToCalendar(!shouldDisplayToCalendar);
                    setShouldDisplayFromCalendar(false);
                  }}
                  style={styles.dateInputField}
                >
                  {endDate.length < 1 ? (
                    <Text style={styles.placeholderText}>Til</Text>
                  ) : (
                    <Text>{endDate}</Text>
                  )}
                  <View style={styles.iconWrapper}>
                    <Ionicons
                      name="calendar"
                      size={14}
                      color={Colors.primary}
                    />
                  </View>
                </Pressable>
              </View>
            </View>

            {shouldDisplayFromCalendar && (
              <Calendar
                onDayPress={(day) => {
                  checkDates(day, false);
                }}
              />
            )}
            {shouldDisplayToCalendar && (
              <Calendar
                onDayPress={(day) => {
                  checkDates(day, true);
                }}
              />
            )}
          </View>

          <View style={styles.inputFieldWrapper}>
            <Text style={styles.inputLabel}>Beskrivelse</Text>
            <TextInput
              multiline
              numberOfLines={10}
              style={styles.inputFieldBig}
              placeholder={"Her kan du legge til en beskrivelse av hytteturen!"}
              value={description}
              onChangeText={(description) => setDescription(description)}
            />
          </View>
        </View>
        <View style={styles.row}></View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  inputFields: {
    flexDirection: "column",
  },
  inputField: {
    backgroundColor: Colors.grey2,
    padding: 10,
    borderRadius: 6,
  },
  dateInputField: {
    backgroundColor: Colors.grey2,
    padding: 10,
    borderRadius: 6,
    width: 170,
    justifyContent: "center",
  },
  inputFieldBig: {
    backgroundColor: Colors.grey2,
    height: 100,
    padding: 10,
    borderRadius: 6,
  },
  inputFieldWrapper: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 10,
  },
  dateFields: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateField: {
    justifyContent: "center",
  },
  iconWrapper: {
    position: "absolute",
    right: 10,
  },
  placeholderText: {
    color: "grey",
  },
});
