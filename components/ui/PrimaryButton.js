import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple="purple"
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.primary800,
    elevation: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: Colors.primary600,
    opacity: 0.75,
  },
});
