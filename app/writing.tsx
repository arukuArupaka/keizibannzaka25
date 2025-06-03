import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Header from "./header";

const writing = () => {
  const [rating, setRating] = useState(0);
  const [attendance, setAttendance] = useState("-");
  const [test1, setTest1] = useState("-");
  const [test2, setTest2] = useState("-");
  const [test3, setTest3] = useState("-");
  const [testComment, setTestComment] = useState("");
  const [comment, setComment] = useState("");

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

      <ScrollView style={styles.container}>
        {/*授業名*/}
        <View style={styles.rowClassName}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>授業名</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>-</Text>
          </View>
        </View>
        {/* 教授名 */}
        <View style={styles.rowProfessorName}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>教授名</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>-</Text>
          </View>
        </View>
        {/* 評価 */}
        <View style={styles.rowReview}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>評価</Text>
          </View>
          <View style={styles.contentContainer}>{renderStars()}</View>
        </View>
        {/* 出席確認 */}
        <View style={styles.rowAttendance}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>出席確認</Text>
          </View>
          <View style={styles.contentContainer}>
            <RNPickerSelect
              placeholder={{ label: "選択してください", value: "-" }}
              onValueChange={(value) => setAttendance(value)}
              Icon={() => <Text style={styles.pickerTest}>▼</Text>}
              items={[
                { label: "毎回とる", value: "毎回とる" },
                { label: "時々とる", value: "時々とる" },
                { label: "毎回とらない", value: "毎回とらない" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>
        {/* テスト */}
        <View style={styles.rowTest}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>テスト</Text>
          </View>
          <View style={styles.testPickersColumn}>
            <View style={styles.testPickerRow}>
              <Text style={styles.testLabel}>前期/中間</Text>
              <RNPickerSelect
                placeholder={{ label: "選択してください", value: "-" }}
                onValueChange={(value) => setTest1(value)}
                Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                items={[
                  { label: "テストあり", value: "テストあり" },
                  { label: "レポートのみ", value: "レポートのみ" },
                  { label: "両方なし", value: "両方なし" },
                ]}
                style={pickerSelectStyles}
              />
            </View>
            <View style={styles.testPickerRow}>
              <Text style={styles.testLabel}>後期/期末</Text>
              <RNPickerSelect
                placeholder={{ label: "選択してください", value: "-" }}
                onValueChange={(value) => setTest2(value)}
                Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                items={[
                  { label: "テストあり", value: "テストあり" },
                  { label: "レポートのみ", value: "レポートのみ" },
                  { label: "両方なし", value: "両方なし" },
                ]}
                style={pickerSelectStyles}
              />
            </View>
            <View style={styles.testPickerRow}>
              <Text style={styles.testLabel}>持ち込み</Text>
              <RNPickerSelect
                placeholder={{ label: "選択してください", value: "-" }}
                onValueChange={(value) => setTest3(value)}
                Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                items={[
                  { label: "可", value: "可" },
                  { label: "不可", value: "不可" },
                ]}
                style={pickerSelectStyles}
              />
            </View>
          </View>
        </View>
        {/* テストの方式・難易度 */}
        <View style={styles.rowTestComment}>
          <View style={styles.labelContainerLarge}>
            <Text style={styles.label}>テストの方式{"\n"}難易度</Text>
          </View>
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.textBox}
              multiline
              value={testComment}
              onChangeText={setTestComment}
              placeholder="記入してください"
              placeholderTextColor="#696969"
            />
          </View>
        </View>
        {/* コメント */}
        <View style={styles.rowComment}>
          <View style={styles.labelContainerLarge}>
            <Text style={styles.label}>コメント</Text>
          </View>
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.textBox}
              multiline
              value={comment}
              onChangeText={setComment}
              placeholder="記入してください"
              placeholderTextColor="#696969"
            />
          </View>
        </View>
        {/* 確認ボタン */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => router.push("/Confirm")}
        >
          <Text style={styles.confirmText}>確認画面へ</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

//テキストボックスの位置とスタイル
const styles = StyleSheet.create({
  //背景
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingHorizontal: "2%",
  },
  //星
  starRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  //項目

  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#696969",
    width: "30%",
    height: 40,
  },
  labelContainerLarge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#696969",
    width: "30%",
    height: 56,
  },
  label: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "DotGothic16_400Regular",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingHorizontal: "4%",
  },
  content: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  //授業名
  rowClassName: {
    marginTop: "35%",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "1%",
  },
  ///教授名
  rowProfessorName: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "1%",
  },
  //評価
  rowReview: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: "1%",
  },
  //出席確認
  rowAttendance: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "2%",
    height: 60,
  },
  //テスト
  rowTest: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 10,
  },
  //テストの方式・難易度
  rowTestComment: {
    marginTop: 17,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    height: "40%",
  },
  //コメント
  rowComment: {
    marginTop: 17,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    height: "40%",
  },
  // 出席確認の選択肢
  pickerAttendance: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    width: "40%",
    height: "20%",
    borderRadius: 10,
  },
  //テストの選択肢
  pickerTest: {
    position: "absolute",
    paddingVertical: 9,
    right: 5,
    top: 2,
    fontSize: 18,
    width: 100,
    textAlign: "right",
  },
  //テストの横の列
  testPickersColumn: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10,
  },
  //テストの横の列の項目
  testPickerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  testLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    width: 80,
    fontFamily: "DotGothic16_400Regular",
  },
  //書き込み
  textBox: {
    height: "90%",
    width: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingLeft: "4%",
    color: "#000000",
    textAlignVertical: "top",
    fontSize: 15,
  },
  //確認ボタン
  confirmButton: {
    backgroundColor: "#696969",
    paddingVertical: "2%",
    paddingHorizontal: "30%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: "5%",
  },
  confirmText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "DotGothic16_400Regular",
    fontWeight: "bold",
  },
});

const pickerSelectStyles = {
  inputIOS: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#000000",
    height: 40,
    justifyContent: undefined,
  },
  inputAndroid: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#000000",
    height: 40,
    justifyContent: undefined,
  },
};

export default writing;
