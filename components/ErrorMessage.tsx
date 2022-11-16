import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  error: string;
  visible: boolean;
}

const ErrorMessage = (props: Props) => {
  if (!props.error || !props.visible) {
    return null;
  }

  return <Text style={styles.errorText}>⚠️ {props.error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: "#fdca40",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
});

export default ErrorMessage;
