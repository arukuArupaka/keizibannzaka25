import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Main = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => router.push("/search2")}
      >
        <Image
          source={require("../assets/images/search.png")}
          style={{ width: 27, height: 27 }}
        />
        <Text style={styles.searchButtonText}>検索</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffffff",
  },
  icon: {
    marginHorizontal: "3%",
  },
  searchButtonText: {
    color: "#1e1e1e",
    fontSize: 17,
    fontFamily: "DotGothic16_400Regular",
  },
  searchButton: {
    backgroundColor: "#d9d9d9",
    marginTop: "23%",
    width: "60%",
    borderRadius: 10,
    flexDirection: "row",
    paddingVertical: "1%",
    marginLeft: "35%",
    paddingLeft: "1%",
  },
});
export default Main;
