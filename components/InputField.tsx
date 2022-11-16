import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  leftIcon?: any;
  iconColor?: string;
  rightIcon?: any;
  inputStyle: any;
  containerStyle: any;
  placeholderTextColor?: any;
  placeholder: string;
  keyboardType?: string;
  textContentType?: string;
  autoCapitalize: string;
  autoFocus?: boolean;
  autoCorrect?: boolean;
  secureTextEntry?: any;
  value: string;
  onChangeText: any;
  handlePasswordVisibility?: any;
}

const InputField = (props: Props, ...rest: any) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.leftIcon ? (
        <MaterialCommunityIcons
          name={props.leftIcon}
          size={20}
          color={props.iconColor}
          style={styles.leftIcon}
        />
      ) : null}
      <TextInput
        {...rest}
        placeholderTextColor={props.placeholderTextColor}
        style={[styles.input, props.inputStyle]}
      />
      {props.rightIcon ? (
        <TouchableOpacity onPress={props.handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={props.rightIcon}
            size={20}
            color={props.iconColor}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: "row",
    padding: 12,
  },
  leftIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: "100%",
    fontSize: 18,
  },
  rightIcon: {
    alignSelf: "center",
    marginLeft: 10,
  },
});

export default InputField;
