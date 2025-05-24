import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity, View } from "react-native";

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
export default main;