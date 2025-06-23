import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./header";

const writing2 = () => {
  const router = useRouter();

  // useLocalSearchParamsから全てのパラメータを取得
  const {
    testComment: initTestComment = "",
    comment: initComment = "",
    fullnessRating,
    easeRating,
    attendance,
    test1,
    test2,
    test3,
    year,
    semester,
  } = useLocalSearchParams();

  // 状態変数を初期化（文字列として）
  const [testCommentState, setTestComment] = useState(
    typeof initTestComment === "string" ? initTestComment : ""
  );
  const [commentState, setComment] = useState(
    typeof initComment === "string" ? initComment : ""
  );

  const handleConfirm = () => {
    router.push({
      pathname: "/Confirm",
      params: {
        // writing画面からのパラメータを全て渡す
        fullnessRating,
        easeRating,
        attendance,
        test1,
        test2,
        test3,
        year,
        semester,
        // 更新された状態変数を渡す（重要な修正点）
        testComment: testCommentState,
        comment: commentState,
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        {/* テストの方式・難易度 */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>テストの方式{"\n"}難易度</Text>
          </View>
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.textBox}
              multiline
              value={testCommentState}
              onChangeText={setTestComment}
              placeholder="記入してください"
              placeholderTextColor="#696969"
            />
          </View>
        </View>

        {/* コメント */}
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>コメント</Text>
          </View>
          <View style={styles.contentContainer}>
            <TextInput
              style={styles.textBox}
              multiline
              value={commentState}
              onChangeText={setComment}
              placeholder="記入してください"
              placeholderTextColor="#696969"
            />
          </View>
        </View>

        {/* 確認ボタン */}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmText}>確認画面へ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  labelContainer: {
    marginTop: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    width: "30%",
    height: 56,
  },
  label: {
    fontSize: 15,
    color: "#1e1e1e",
    fontFamily: "DotGothic16_400Regular",
  },
  contentContainer: {
    marginTop: "30%",
    width: "70%",
    paddingLeft: 8,
  },
  textBox: {
    height: 200,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
    fontSize: 15,
    color: "#1e1e1e",
  },
  confirmButton: {
    backgroundColor: "#d9d9d9",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  confirmText: {
    color: "#1e1e1e",
    fontSize: 20,
    fontFamily: "DotGothic16_400Regular",
    fontWeight: "bold",
  },
});

export default writing2;
