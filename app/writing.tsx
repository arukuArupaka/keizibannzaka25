import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const ReviewInput = () => {
  const [review, setReview] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.textBox}
          placeholder="授業の口コミを書く"
          placeholderTextColor="#ccc"
          value={review}
          onChangeText={(text) => setReview(text)}
          multiline
          numberOfLines={5}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#1e1e1e", // 背景を暗く
    flex: 1,
    justifyContent: "center",
  },
  textBox: {
    backgroundColor: "#666", // グレー背景
    color: "#fff", // 入力文字は白
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    textAlignVertical: "top", // Android で上揃えにする
  },
});

export default ReviewInput;
