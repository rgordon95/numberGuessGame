import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    borderColor: '#ffffff',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    color: '#ffffff',
    fontSize: 24,
    fontFamily: "OpenSans-Bold",
    marginVertical: 16,
    maxWidth: "80%",
    padding: 12,
    textAlign: "center",
    width: 300,
  },
});
