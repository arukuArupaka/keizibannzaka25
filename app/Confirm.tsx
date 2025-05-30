import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "./header";

const Confirm = () => {
  const { rating, review } = useLocalSearchParams();
  const numericRating = Number(rating);

  //星の表示
  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <FontAwesome
          key={index}
          name={index < numericRating ? "star" : "star-o"}
          size={24}
          color="#FFCD06"
          style={{ marginRight: index !== 4 ? 3 : 0 }}
        />
      ));
  };
  // 投稿ボタンの処理
  const handlePost = () => {
    Alert.alert("投稿完了");
    // 必要に応じて、サーバーにデータを送信する処理を追加
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.starContainer}>{renderStars()}</View>
        <View style={styles.textBox}>
          <Text style={styles.text}>{review}</Text>
        </View>
        <View style={styles.heartContainer}>
          <AntDesign
            name="like2"
            size={30}
            color="white"
            style={{ marginLeft: "80%" }}
          />
          <AntDesign
            name="dislike2"
            size={30}
            color="white"
            style={{ marginLeft: "3%" }}
          />
        </View>
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>投稿する</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  starContainer: {
    marginTop: "60%",
    flexDirection: "row",
    backgroundColor: "#696969",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: "5%",
    paddingLeft: "5%",
  },
  textBox: {
    backgroundColor: "#696969",
    paddingLeft: "5%",
    paddingTop: "10%",
    textAlignVertical: "top",
    height: "30%",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  postButton: {
    backgroundColor: "#696969",
    paddingVertical: "2%",
    paddingHorizontal: "30%",
    borderRadius: 10,
    alignItems: "center",
  },
  postButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  heartContainer: {
    marginBottom: "10%",
    backgroundColor: "#696969",
    paddingRight: "6%",
    paddingBottom: "3%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
  },
});

export default Confirm;
