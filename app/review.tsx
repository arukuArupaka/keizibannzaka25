import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Footer from "./footer";
import Header from "./header";

const Review = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Footer />
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
    backgroundColor: "#ffffff",
  },
  label: {
    marginTop: "50%",
    backgroundColor: "#9e9e9e",
    alignSelf: "center",
    width: "80%",
    height: "9%",
  },
});

export default Review;
