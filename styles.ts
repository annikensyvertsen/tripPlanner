import { StyleSheet } from "react-native";
import { Colors } from "./utils/colors";

export const cardStyles = StyleSheet.create({

    primaryCard: {
        width: 200,
        height: 100,
        padding: 20,
        margin: 10,
        color: Colors.black,
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowColor: Colors.black,
        alignContent: "center",
        justifyContent: "center"
    }
})

export const textStyles = StyleSheet.create({

    paragraph: {
        fontSize: 14,
        color: Colors.black
    }
})
