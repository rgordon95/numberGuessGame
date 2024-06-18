import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, extraStyles }) => (
  <Text style={[styles.instructionText, extraStyles]}>{children}</Text>
);

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary500,
    fontSize: 24,
  },
});
