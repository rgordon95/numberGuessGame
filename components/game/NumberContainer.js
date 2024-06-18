import { Dimensions, Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: Colors.secondary500,
    borderRadius: 8,
    borderWidth: 4,
    justifyContent: "center",
    margin: deviceWidth > 380 ? 24 : 12,
    padding: deviceWidth > 380 ? 24 : 12,
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: deviceWidth > 380 ? 36 : 28,
    fontFamily: "OpenSans-Bold",
  },
});

