import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./header";

export default function Confirm() {
  const router = useRouter();
  const {
    fullnessRating,
    easeRating,
    attendance,
    test1,
    test2,
    test3,
    year,
    semester,
    testComment,
    comment,
  } = useLocalSearchParams();

  const renderStars = (value: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <FontAwesome
          key={index}
          name={index < Number(value) ? "star" : "star-o"}
          size={20}
          color="#FFCD06"
          style={{ marginRight: 2 }}
        />
      ));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
      <Header />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 授業名 */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>授業名</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.value}></Text>
          </View>
        </View>

        {/* 教授名 */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>教授名</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.value}></Text>
          </View>
        </View>

        {/* 評価 */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>評価</Text>
          </View>
          <View style={styles.reviewContainer}>
            <View style={styles.reviewRow}>
              <Text style={styles.reviewLabel}>充実度</Text>
              <View style={styles.starRow}>
                {renderStars(Number(fullnessRating))}
              </View>
            </View>
            <View style={styles.reviewRow}>
              <Text style={styles.reviewLabel}>楽単度</Text>
              <View style={styles.starRow}>
                {renderStars(Number(easeRating))}
              </View>
            </View>
          </View>
        </View>

        {/* 出席確認 */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>出席確認</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.value}>{attendance}</Text>
          </View>
        </View>

        {/* テスト */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>テスト</Text>
          </View>
          <View style={styles.testPickersColumn}>
            <View style={styles.testPickerRow}>
              <Text style={styles.testLabel}>前期/中間</Text>
              <Text style={styles.value}>{test1}</Text>
            </View>
            <View style={styles.testPickerRow}>
              <Text style={styles.testLabel}>後期/期末</Text>
              <Text style={styles.value}>{test2}</Text>
            </View>
            <View style={styles.testPickerRow}>
              <Text style={styles.testLabel}>持ち込み</Text>
              <Text style={styles.value}>{test3}</Text>
            </View>
          </View>
        </View>

        {/* 受けた時期 */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>受けた時期</Text>
          </View>
          <View style={styles.testPickersColumn}>
            <View style={styles.testPickerRow}>
              <Text style={styles.testLabel}>年度</Text>
              <Text style={styles.value}>{year}</Text>
            </View>
            <View style={styles.testPickerRow}>
              <Text style={styles.testLabel}>学期</Text>
              <Text style={styles.value}>{semester}</Text>
            </View>
          </View>
        </View>

        {/* テストの方式・難易度 */}
        <View style={styles.row}>
          <View style={styles.labelContainerLarge}>
            <Text style={styles.label}>テストの方式{"\n"}難易度</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.value}>{testComment}</Text>
          </View>
        </View>

        {/* コメント */}
        <View style={styles.row}>
          <View style={styles.labelContainerLarge}>
            <Text style={styles.label}>コメント</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.value}>{comment}</Text>
          </View>
        </View>
        {/* 投稿ボタン */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            Alert.alert("投稿完了", "ありがとうございます！", [
              { text: "OK", onPress: () => router.replace("/review") },
            ]);
          }}
        >
          <Text style={styles.submitText}>投稿する</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingHorizontal: "2%",
  },
  scrollContent: {
    paddingTop: "35%",
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  labelContainer: {
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 40,
  },
  labelContainerLarge: {
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 56,
  },
  label: {
    fontSize: 15,
    color: "#1e1e1e",
    fontFamily: "DotGothic16_400Regular",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: "4%",
    justifyContent: "center",
  },
  value: {
    color: "#1e1e1e",
    fontSize: 15,
    flexShrink: 1,
  },
  reviewContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
  },
  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  reviewLabel: {
    color: "#1e1e1e",
    fontSize: 15,
    fontFamily: "DotGothic16_400Regular",
    width: 60,
  },
  starRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  testPickersColumn: {
    flex: 1,
    marginLeft: 20,
  },
  testPickerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  testLabel: {
    color: "#1e1e1e",
    fontSize: 15,
    fontFamily: "DotGothic16_400Regular",
    width: 80,
  },
  submitButton: {
    backgroundColor: "#d9d9d9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#1e1e1e",
    fontSize: 18,
    fontWeight: "bold",
  },
});
