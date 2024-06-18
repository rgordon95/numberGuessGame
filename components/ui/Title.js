import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    borderColor: Colors.secondary500,
    borderWidth: 2,
    color: Colors.secondary500,
    fontSize: 24,
    fontFamily: "OpenSans-Bold",
    marginVertical: 16,
    padding: 12,
    textAlign: "center",
  },
});
