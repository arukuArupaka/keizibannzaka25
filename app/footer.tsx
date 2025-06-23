import React from "react";
import { StyleSheet, View } from "react-native";

export default function Footer() {
  return <View style={styles.footer}></View>;
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#d9d9d9",
    paddingVertical: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
