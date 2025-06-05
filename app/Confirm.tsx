import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./header";

export default function ConfirmScreen() {
  const { rating, attendance, test1, test2, test3, testComment, comment } =
    useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <ScrollView style={styles.container}>
        {/* 受け取った内容を表示 */}
        <View style={styles.row}>
          <Text style={styles.label}>評価</Text>
          <Text style={styles.content}>{rating}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>出席確認</Text>
          <Text style={styles.content}>{attendance}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>前期/中間</Text>
          <Text style={styles.content}>{test1}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>後期/期末</Text>
          <Text style={styles.content}>{test2}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>持ち込み</Text>
          <Text style={styles.content}>{test3}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>テストの方式・難易度</Text>
          <Text style={styles.content}>{testComment}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>コメント</Text>
          <Text style={styles.content}>{comment}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    padding: 16,
  },
  row: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
