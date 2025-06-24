import {
  DotGothic16_400Regular,
  useFonts,
} from "@expo-google-fonts/dotgothic16";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "./footer";
import Main from "./main";

//学部カテゴリーの設定
const categories = ["共通", "経済", "スポ健", "食マネ", "理工", "生命", "薬"];
export default function CategoryTabs() {
  const [selected, setSelected] = useState("共通");
  const [fontsLoaded] = useFonts({
    DotGothic16_400Regular,
  });
  const router = useRouter();

  //ローディング画面
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Main />
      <Footer />
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <View style={styles.tabWrapper}>
        <View style={styles.tabContainer}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelected(cat)}
              style={styles.tab}
            >
              <Text
                style={[
                  styles.tabText,
                  selected === cat && styles.selectedText,
                ]}
              >
                {cat}
              </Text>
              {selected === cat && <View style={styles.selectedTextline} />}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tabTextLine} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //背景
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  //掲示坂２５のロゴ
  logo: {
    position: "absolute",
    width: "35%",
    height: "15%",
    marginTop: "8%",
  },
  //学部カテゴリー＋下線を含む要素
  tabWrapper: {
    position: "absolute",
    top: "18%",
    width: "100%",
  },
  //選択していない学部
  tabText: {
    color: "#9e9e9e",
    fontSize: 17,
    fontFamily: "DotGothic16_400Regular",
  },
  //選択中の学部
  selectedText: {
    color: "#1e1e1e",
    fontSize: 17,
    fontWeight: "bold",
    textShadowColor: "#555",
    textShadowOffset: {
      height: 1,
      width: 0,
    },
    textShadowRadius: 2,
  },
  //学部カテゴリーの要素
  tabContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  tab: {
    paddingHorizontal: "2.5%",
    alignItems: "center",
    position: "relative",
  },
  //選択中の学部の下線
  selectedTextline: {
    zIndex: 2,
    height: 1.5,
    backgroundColor: "#1e1e1e",
    width: "100%",
  },
  //選択していない学部の下線
  tabTextLine: {
    zIndex: 1,
    height: 1,
    backgroundColor: "#9e9e9e",
    width: "100%",
  },
});
