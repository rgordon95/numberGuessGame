import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: Colors.secondary500,
    borderRadius: 8,
    borderWidth: 4,
    justifyContent: "center",
    margin: 24,
    padding: 24,
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: 36,
    fontFamily: "OpenSans-Bold",
  },
});

