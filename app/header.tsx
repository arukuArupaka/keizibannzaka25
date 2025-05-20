import { Text, View, Button } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "12%",
        backgroundColor: "#696969",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    ></View>
  );
};

export default Header;
