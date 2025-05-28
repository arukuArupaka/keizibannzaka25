import {
  DotGothic16_400Regular,
  useFonts,
} from "@expo-google-fonts/dotgothic16";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Main from "./main";

const categories = ["共通", "経済", "スポ健", "食マネ", "理工", "生命", "薬"];

export default function CategoryTabs() {
  const [selected, setSelected] = useState("共通");

  const [fontsLoaded] = useFonts({
    DotGothic16_400Regular,
  });
  const router = useRouter();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#888" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Main />
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelected(cat)}
            style={styles.tab}
          >
            <Text
              style={[styles.tabText, selected === cat && styles.selectedText]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.underline} />
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
  line: {
    width: "100%",
    height: 50,
    color: "#696969",
    marginTop: "50%",
  },
  lineContainer: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    alignItems: "center",
  },

  tabText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "DotGothic16_400Regular",
    paddingHorizontal: 20,
  },

  selectedText: {
    color: "#696969",
    fontWeight: "bold",
  },
  underline: {},
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#696969",
    marginRight: 10,
  },
});
