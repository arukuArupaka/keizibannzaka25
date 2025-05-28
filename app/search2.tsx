import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Header from "./header";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Search = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => router.push("/review")}
      >
        <FontAwesome
          name="search"
          size={20}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.searchButtonText}>授業を検索</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //背景のスタイル
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  //検索ボタンのスタイル
  searchButton: {
    flexDirection: "row",
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: "#696969",
    marginTop: "35%",
    borderRadius: 10,
    paddingVertical: "1%",
  },
  //「検索」の文字のスタイル
  searchButtonText: {
    color: "#333333",
    fontSize: 20,
  },
  //🔍のスタイル
  icon: {
    marginHorizontal: "3%",
  },
});

export default Search;
