import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import { useRouter } from "expo-router";
import Header from "./header";

const writing = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const router = useRouter();

  //ユーザーが星をタップしたときに、選択された星とそれより左側の星が黄色に塗りつぶされる
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
          <View>
            {index < rating ? (
              <Fontisto name="star" size={20} color="#FFCD06" />
            ) : (
              <FontAwesome6 name="star" size={20} color="#FFCD06" />
            )}
          </View>
        </TouchableOpacity>
      ));
  };

  //完了ボタンの登場・口コミの関数とスタイル
  return (
    <>
      <Header>
        {review.length > 0 && (
          <TouchableOpacity
            onPress={() => router.push("/Confirm")} // Confirm画面に遷移
            style={styles.completeButton}
          >
            <Text style={styles.completeButtonText}>完了</Text>
          </TouchableOpacity>
        )}
      </Header>
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
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

//テキストボックスの位置とスタイル
const styles = StyleSheet.create({
  container: {
    padding: "5%",
    backgroundColor: "#1e1e1e",
    flex: 1,
    justifyContent: "center",
  },
  starContainer: {
    flexDirection: "row",
    backgroundColor: "#696969",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 15,
    paddingLeft: 15,
  },
  textBox: {
    backgroundColor: "#696969",
    color: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15,
    fontSize: 16,
    textAlignVertical: "top",
    height: "33%",
  },
  completeButton: {
    position: "absolute",
    right: 20,
    top: 10,
    backgroundColor: "#FFCD06",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  completeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default writing;
