import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Main = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchButton2}
        onPress={() => router.push("/search2")}
      >
        <FontAwesome
          name="search"
          size={23}
          color="#000000"
          style={styles.icon}
        />
        <Text style={styles.searchButton2Text}>検索</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  icon: {
    marginHorizontal: "3%",
  },
  searchButton2Text: {
    color: "#000000",
    fontSize: 20,
  },
  searchButton2: {
    backgroundColor: "#696969",
    marginTop: "23%",
    width: "60%",
    borderRadius: 10,
    flexDirection: "row",
    paddingVertical: "1%",
    marginLeft: "35%",
  },
});
export default Main;
