import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Header from "./header";

export default function SearchScreen() {
  const [faculty, setFaculty] = useState("-");
  const [department, setDepartment] = useState("-");
  const [year, setYear] = useState("-");
  const [semester, setSemester] = useState("-");
  const [subject, setSubject] = useState("-");
  const [departmentItems, setDepartmentItems] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (faculty === "経済部") {
      setDepartmentItems([{ label: "経済学科", value: "経済学科" }]);
    } else if (faculty === "スポーツ健康学部") {
      setDepartmentItems([
        { label: "スポーツ健康科学科", value: "スポーツ健康科学科" },
      ]);
    } else if (faculty === "食マネジメント学部") {
      setDepartmentItems([
        { label: "食マネジメント学科", value: "食マネジメント学科" },
      ]);
    } else if (faculty === "理工学部") {
      setDepartmentItems([
        { label: "数理科学科", value: "数理科学科" },
        { label: "物理科学科", value: "物理科学科" },
        { label: "電気電子工学科", value: "電気電子工学科" },
        { label: "電気電子情報学科", value: "電気電子情報学科" },
        { label: "機械工学科", value: "機械工学科" },
        { label: "ロボティクス学科", value: "ロボティクス学科" },
        { label: "環境都市工学科", value: "環境都市工学科" },
        { label: "建築都市デザイン学科", value: "建築都市デザイン学科" },
      ]);
    } else if (faculty === "生命科学部") {
      setDepartmentItems([
        { label: "応用化学科", value: "応用化学科" },
        { label: "生物工学科", value: "生物工学科" },
        { label: "生命情報学科", value: "生命情報学科" },
        { label: "生命医科学科", value: "生命医科学科" },
      ]);
    } else if (faculty === "薬学部") {
      setDepartmentItems([
        { label: "薬学科", value: "薬学科" },
        { label: "創薬科学科", value: "創薬科学科" },
      ]);
    } else if (faculty === "") {
    } else {
      setDepartmentItems([]);
    }
    setDepartment("-");
  }, [faculty]);

  const router = useRouter();

  return (
    <>
      <Header />
      <View style={styles.backcontainer}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>学部</Text>
            </View>
            <View style={styles.contentContainer}>
              <RNPickerSelect
                placeholder={{ label: "選択してください", value: "-" }}
                onValueChange={(value) => setFaculty(value)}
                Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                items={[
                  { label: "経済部", value: "経済部" },
                  { label: "スポーツ健康学部", value: "スポーツ健康学部" },
                  { label: "食マネジメント学部", value: "食マネジメント学部" },
                  { label: "理工学部", value: "理工学部" },
                  { label: "生命学部", value: "生命学部" },
                  { label: "薬学部", value: "薬学部" },
                ]}
                style={pickerStyles}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>学科</Text>
            </View>
            <View style={styles.contentContainer}>
              <RNPickerSelect
                placeholder={{ label: "選択してください", value: "-" }}
                onValueChange={(value) => setDepartment(value)}
                Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                style={pickerStyles}
                items={departmentItems}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>年度</Text>
            </View>
            <View style={styles.contentContainer}>
              <RNPickerSelect
                placeholder={{ label: "選択してください", value: "-" }}
                onValueChange={(value) => setYear(value)}
                Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                items={[{ label: "2025年度", value: "2025年度" }]}
                style={pickerStyles}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>学期</Text>
            </View>
            <View style={styles.contentContainer}>
              <RNPickerSelect
                placeholder={{ label: "選択してください", value: "-" }}
                onValueChange={(value) => setSemester(value)}
                Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                items={[
                  { label: "春学期", value: "春学期" },
                  { label: "秋学期", value: "秋学期" },
                ]}
                style={pickerStyles}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>科目</Text>
            </View>
            <View style={styles.contentContainer}>
              <RNPickerSelect
                placeholder={{ label: "選択してください", value: "-" }}
                onValueChange={(value) => setSubject(value)}
                Icon={() => <Text style={styles.pickerTest}>▼</Text>}
                items={[
                  {
                    label: "共通 (教養科目/外国語科目)",
                    value: "共通 (教養科目/外国語科目)",
                  },
                  { label: "(基礎)専門科目", value: "(基礎)専門科目" },
                  { label: "その他", value: "その他" },
                ]}
                style={pickerStyles}
              />
            </View>
          </View>
        </View>

        {/** 検索ボタン */}
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => router.push("/review")}
        >
          <FontAwesome name="search" size={20} color="#FFFFFF" />
          <Text style={styles.searchButtonText}>検索</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backcontainer: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    paddingHorizontal: "2%",
  },
  container: {
    marginTop: "35%",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "2%",
    height: 60,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#696969",
    width: "30%",
    height: 30,
  },
  label: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "DotGothic16_400Regular",
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#696969",
    paddingVertical: 10,
    borderRadius: 8,
  },
  searchButtonText: {
    paddingHorizontal: 10,
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "DotGothic16_400Regular",
    fontWeight: "bold",
  },
  pickerTest: {
    position: "absolute",
    top: 10,
    right: 5,
    fontSize: 18,
    width: 140,
    textAlign: "right",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingHorizontal: "4%",
  },
});

const pickerStyles = {
  inputIOS: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#000000",
    height: 40,
    paddingRight: 30,
    justifyContent: undefined,
  },
  inputAndroid: {},
};
