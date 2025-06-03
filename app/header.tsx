import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back-sharp" size={50} color="black" />
      </TouchableOpacity>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "12%",
    backgroundColor: "#696969",
    position: "absolute",
    marginTop: 0,
    marginLeft: 0,
    zIndex: 1,
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: "5%",
    marginTop: 50,
    justifyContent: "flex-start",
  },
});

export default Header;
