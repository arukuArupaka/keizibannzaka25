import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === "/";

  const handleHomePress = () => {
    if (!isHome) {
      router.push("/");
    }
  };

  const handleWritingPress = () => {
    if (pathname !== "/search") {
      router.push("/search");
    }
  };

  const handleReversePress = () => {
    // if (pathname !== "/index_bad") {
    console.log("Reverse button pressed");
    router.push("/lock");
    // }
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleWritingPress} style={styles.middleIcon}>
        <Image
          source={
            pathname === "/search"
              ? require("../assets/images/writing_on.png")
              : require("../assets/images/writing_off.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHomePress} style={styles.middleIcon}>
        <Image
          source={
            isHome
              ? require("../assets/images/home_on.png")
              : require("../assets/images/home_off.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleReversePress} style={styles.middleIcon}>
        <Image
          source={
            pathname === "/lock"
              ? require("../assets/images/reverse_on.png")
              : require("../assets/images/reverse_off.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    borderTopWidth: 3,
    borderTopColor: "#1e1e1e",
  },
  icon: {
    width: 55,
    height: 55,
  },
  middleIcon: {
    marginHorizontal: 30,
  },
});
