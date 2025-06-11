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
  const [fullnessRating, setFullnessRating] = useState(0);
  const [easeRating, setEaseRating] = useState(0);
  const [attendance, setAttendance] = useState("-");
  const [test1, setTest1] = useState("-");
  const [test2, setTest2] = useState("-");
  const [test3, setTest3] = useState("-");
  const [year, setYear] = useState("-");
  const [semester, setSemester] = useState("-");

  const [testComment, setTestComment] = useState("-");
  const [comment, setComment] = useState("-");

  const router = useRouter();

  //ユーザーが星をタップしたときに、選択された星とそれより左側の星が黄色に塗りつぶされる
  const renderStars = (
    value: number,
    setValue: {
      (value: React.SetStateAction<number>): void;
      (value: React.SetStateAction<number>): void;
      (arg0: number): void;
    }
  ) => {
    return Array(5)
      .fill(0)
      .map((_, index) => {
        const iconStyle = index !== 4 ? { marginRight: 3 } : {};
        return (
          <TouchableOpacity key={index} onPress={() => setValue(index + 1)}>
            {index < value ? (
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
    <View style={{ flex: 1 }}>
      <Header />

      <ScrollView style={styles.container}>
        <View style={{ height: 1500 }}>
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
            <View style={styles.reviewContainer}>
              <View style={styles.reviewRow}>
                <Text style={styles.reviewLabel}>充実度</Text>
                <View style={styles.starRow}>
                  {renderStars(fullnessRating, setFullnessRating)}
                </View>
              </View>
              <View style={styles.reviewRow}>
                <Text style={styles.reviewLabel}>楽単度</Text>
                <View style={styles.starRow}>
                  {renderStars(easeRating, setEaseRating)}
                </View>
              </View>
            </View>
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
          {/* 受けた時期 */}
          <View style={styles.rowAttendance}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>受けた時期</Text>
            </View>
            <View style={styles.testPickersColumn}>
              <View style={styles.testPickerRow}>
                <Text style={styles.testLabel}>年度</Text>
                <RNPickerSelect
                  placeholder={{ label: "選択してください", value: "-" }}
                  onValueChange={(value) => setYear(value)}
                  Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                  items={[{ label: "2025", value: "2025" }]}
                  style={pickerSelectStyles}
                />
              </View>
              <View style={styles.testPickerRow}>
                <Text style={styles.testLabel}>学期</Text>
                <RNPickerSelect
                  placeholder={{ label: "選択してください", value: "-" }}
                  onValueChange={(value) => setSemester(value)}
                  Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                  items={[
                    { label: "春学期", value: "春学期" },
                    { label: "秋学期", value: "秋学期" },
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
            onPress={() =>
              router.push({
                pathname: "/Confirm",
                params: {
                  rating,
                  attendance,
                  test1,
                  test2,
                  test3,
                  year,
                  semester,
                  testComment,
                  comment,
                },
              })
            }
          >
            <Text style={styles.confirmText}>確認画面へ</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

//テキストボックスの位置とスタイル
const styles = StyleSheet.create({
  //背景
  container: {
    backgroundColor: "#1e1e1e",
    paddingHorizontal: "2%",
    height: "100%",
  },

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
    marginBottom: 20,
  },
  ///教授名
  rowProfessorName: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 20,
  },
  //評価
  rowReview: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  reviewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 20,
  },
  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  reviewLabel: {
    color: "#FFFFFF",
    fontSize: 15,
    width: 60,
    fontFamily: "DotGothic16_400Regular",
  },
  starRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  //出席確認
  rowAttendance: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 20,
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
    marginTop: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    height: "20%",
  },
  //コメント
  rowComment: {
    marginTop: 17,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    height: "20%",
  },
  pickerTest: {
    position: "absolute",
    paddingVertical: 9,
    right: 5,
    top: 2,
    fontSize: 15,
    width: 100,
    textAlign: "right",
  },
  //テストの横の列
  testPickersColumn: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 20,
  },
  //テストの横の列の項目
  testPickerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  testLabel: {
    color: "#FFFFFF",
    fontSize: 15,
    width: 80,
    fontFamily: "DotGothic16_400Regular",
  },
  //書き込み
  textBox: {
    height: 250,
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
    paddingRight: 30,
    justifyContent: undefined,
  },
  inputAndroid: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#000000",
    height: 40,
    paddingRight: 30,
    justifyContent: undefined,
  },
};

export default writing;
