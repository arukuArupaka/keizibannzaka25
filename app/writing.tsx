import React, { useState } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import Header from "./header";
const writing = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  //ユーザーが星をタップしたときに、選択された星とそれより左側の星が黄色に塗りつぶされる
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
          <Text
            style={[
              styles.star,
              { color: index < rating ? "#FFCD06" : "#BDBDBD" },
            ]}
          >
            ★
          </Text>
        </TouchableOpacity>
      ));
  };
  //口コミの関数とスタイル
  return (
    <>
      <Header />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
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
    padding: 20,
    backgroundColor: "#1e1e1e",
    flex: 1,
    justifyContent: "center",
  },

  textBox: {
    backgroundColor: "#696969",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    textAlignVertical: "top",
    height: "33%",
  },
  star: {
    fontSize: 20,
    marginHorizontal: 3,
  },
});

export default writing;
