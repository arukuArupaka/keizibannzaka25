import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "./header";

//項目
const [attendance, setAttendance] = useState("");
const [term, setTerm] = useState("");
const [testDifficulty, setTestDifficulty] = useState("");
const [comment, setComment] = useState("");
//星
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
      <View style={styles.detailRow}>
        <Text style={styles.label}>出席</Text>
        <Picker
          selectedValue={attendance}
          style={styles.picker}
          onValueChange={(itemValue) => setAttendance(itemValue)}
        >
          <Picker.Item label="選択してください" value="" />
          <Picker.Item label="毎回とる" value="毎回とる" />
          <Picker.Item label="時々とる" value="時々とる" />
          <Picker.Item label="毎回とらない" value="毎回とらない" />
        </Picker>
      </View>
    </>
  );
};

//テキストボックスの位置とスタイル
const styles = StyleSheet.create({
  //背景のスタイル
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  detailRow: {},
  label: {},
  picker: {},
});

export default writing;
