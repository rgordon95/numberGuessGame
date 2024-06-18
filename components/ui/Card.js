import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.primary600,
    elevation: 5,
    marginHorizontal: 24,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
