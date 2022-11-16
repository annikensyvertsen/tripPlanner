import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

interface Props {
  title: string;
  backgroundColor: string;
  titleColor?: string;
  titleSize: number;
  onPress: any;
  width?: string;
  containerStyle: any;
}

const PrimaryButton = (props: Props) => {
  const {
    onPress,
    backgroundColor,
    width,
    containerStyle,
    titleColor,
    titleSize,
    title,
  } = props;
  return (
    <Pressable
      onPress={onPress}
      style={(args) => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor,
              width,
            },
            containerStyle,
          ];
        }

        return [
          styles.base,
          {
            opacity: 1,
            backgroundColor,
            width,
          },
          containerStyle,
        ];
      }}
    >
      <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
  },
  base: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
});

export default PrimaryButton;
