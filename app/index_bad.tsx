import {
  DotGothic16_400Regular,
  useFonts,
} from "@expo-google-fonts/dotgothic16";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
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

  // //ローディング画面
  // if (!fontsLoaded) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" color="#FFFFFF" />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <CategoryTabs />
      <Main />
      <Footer />
      <Image
        source={require("../assets/images/logo_2.png")}
        style={styles.logo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  //背景
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },

  //掲示坂２５のロゴ
  logo: {
    position: "absolute",
    width: "35%",
    height: "15%",
    marginTop: "8%",
  },
});
