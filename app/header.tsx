import React from "react";
import { View, StyleSheet } from "react-native";

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <View style={styles.header}>{children}</View>;
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "12%",
    backgroundColor: "#696969",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
  },
});

export default Header;
