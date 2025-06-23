import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Main = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => router.push("/search2")}
      >
        <FontAwesome
          name="search"
          size={23}
          color="#000000"
          style={styles.icon}
        />
        <Text style={styles.searchButtonText}>検索</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
  },
});
export default Main;
