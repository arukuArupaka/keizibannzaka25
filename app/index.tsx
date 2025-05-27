import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/search")}
      >
        <AntDesign name="plussquare" size={100} color="#696969" />
      </TouchableOpacity>
    </View>
  );
}
const main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1e1e1e" }}>

   {/*フッター部分*/}
      <View
        style={{
          width: "100%",
          height: "15%",
          backgroundColor: "#1e1e1e",
          flexDirection: "row",
          alignItems: "center", //垂直方向の位置を中央にそろえる
          borderColor: "#A9A9A9",
          borderBottomWidth:1,
          paddingLeft: 3,//左側に余白を追加
        }}
      >  <TouchableOpacity style={{backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
       }} >
         <FontAwesome 
        name="search" 
        size={23} 
        color="#A9A9A9"
        />
        </TouchableOpacity> 
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  addButton: {
    paddingTop: "185%",
    paddingLeft: "73%",
  },
});
