import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./header";

const writing = () => {
 
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const router = useRouter();

  //ユーザーが星をタップしたときに、選択された星とそれより左側の星が黄色に塗りつぶされる

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => {
        const iconStyle = index !== 4 ? { marginRight: 3 } : {};
        return (
          <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
            {index < rating ? (
              <FontAwesome
                name="star"
                size={24}
                color="#FFCD06"
                style={iconStyle}
              />
            ) : (
              <FontAwesome
                name="star-o"
                size={24}
                color="#FFCD06"
                style={iconStyle}
              />
            )}
          </TouchableOpacity>
        );
      });
  };
  //口コミの関数とスタイル
  return (
    <>
      <Header />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.starContainer}>{renderStars()}</View>
          <TextInput
            style={styles.textBox}
            placeholder="授業の口コミを書く"
            placeholderTextColor="#BDBDBD"
            value={review}
            onChangeText={(text) => setReview(text)}
            multiline
          />
          {review.length > 0 && (
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() =>
                router.push({
                  pathname: "/Confirm",
                  params: { review, rating },
                })
              }
            >
              <Text style={styles.confirmButtonText}>確認画面へ</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

//テキストボックスの位置とスタイル
const styles = StyleSheet.create({
  //背景のスタイル
  container: {
    paddingHorizontal: "5%",
    backgroundColor: "#1e1e1e",
    height: "100%",
  },
  //星のスタイル
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
  //テキストボックス
  textBox: {
    marginTop: "0%",
    backgroundColor: "#696969",
    color: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: "5%",
    paddingTop: "10%",
    fontSize: 20,
    textAlignVertical: "top",
    height: "33%",
  },
  //「確認画面へ」のボタン
  confirmButton: {
    marginTop: "10%",
    backgroundColor: "#696969",
    paddingVertical: "2%",
    paddingHorizontal: "30%",
    borderRadius: 10,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default writing;
