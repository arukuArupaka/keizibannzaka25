import React from "react";
import { StyleSheet, Text, View } from "react-native";

const confirm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>確認画面</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default confirm;
