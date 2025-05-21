import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./header";

const Search = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  searchButton: {},
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Search;
