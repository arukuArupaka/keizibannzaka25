import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Main from "./main";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Main />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/search")}
      >
        <AntDesign name="plussquare" size={100} color="#696969" />
      </TouchableOpacity>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  addButton: {
    position: "absolute",
    bottom: "5%",
    right: "7%",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: "35%",
    height: "15%",
    marginTop: "8%",
  },
});
