import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "./header";

const Confirm = () => {
  const { rating, review } = useLocalSearchParams();
  const numericRating = Number(rating);
  const [hearted, setHearted] = useState(false);

  //星の表示
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <FontAwesome
          key={index}
          name={index < numericRating ? "star" : "star-o"}
          size={24}
          color="#FFCD06"
          style={{ marginRight: index !== 4 ? 3 : 0 }}
        />
      ));
  };
  // 投稿ボタンの処理
  const handlePost = () => {
    Alert.alert("投稿完了");
    // 必要に応じて、サーバーにデータを送信する処理を追加
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.starContainer}>{renderStars()}</View>
         <TouchableOpacity
          onPress={() => setHearted(!hearted)}
          style={{ marginBottom: "50%", alignSelf: "flex-end" }}
        >
          <MaterialCommunityIcons
            name={hearted ? "cards-heart" : "cards-heart-outline"}
            size={24}
            color="red"
          />
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={styles.text}>{review}</Text>
        </View>
         <MaterialCommunityIcons
          name="cards-heart"
          size={24}
          color="red"
          style={{ marginTop: "100%", alignSelf: "flex-end" }}
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>投稿する</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1e1e1e",
    paddingHorizontal: "5%",
  },
  starContainer: {
    marginTop: "60%",
    flexDirection: "row",
    backgroundColor: "#696969",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: "5%",
    paddingLeft: "5%",
  },
  textBox: {
    marginTop: "0%",
    backgroundColor: "#696969",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: "5%",
    paddingTop: "10%",
    textAlignVertical: "top",
    height: "33%",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  postButton: {
    marginTop: "10%",
    backgroundColor: "#696969",
    paddingVertical: "2%",
    paddingHorizontal: "30%",
    borderRadius: 10,
    alignItems: "center",
  },
  postButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default confirm;
