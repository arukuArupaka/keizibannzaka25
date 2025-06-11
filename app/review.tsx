import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Header from "./header";

const Review = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.label}
          onPress={() => router.push("/writing")}
        ></TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingHorizontal: "2%",
  },
  label: {
    marginTop: "50%",
    backgroundColor: "#696969",
    alignSelf: "center",
    width: "80%",
    height: "9%",
  },
});

export default Review;
