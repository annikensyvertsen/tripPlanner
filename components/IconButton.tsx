import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

/* 
const IconButton = (
  { color }: { color: string },
  { size }: { size: number },
  { onPress }: { onPress: any },
  { name }: { name: any }
)  */

interface Props {
  color: string;
  size: number;
  onPress: any;
  name: any;
}

const IconButton = (props: Props) => {
  return (
    <Pressable
      style={(args) => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor: "transparent",
            },
          ];
        }

        return [styles.base, { opacity: 1, backgroundColor: "transparent" }];
      }}
      onPress={props.onPress}
    >
      <AntDesign name={props.name} size={props.size} color={props.color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconButton;
