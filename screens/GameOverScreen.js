import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.boldText}>{roundsNumber}</Text> rounds to Guess
        the number <Text style={styles.boldText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  boldText: {
    color: colors.primary500,
    fontFamily: "OpenSans-Bold",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 24,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    borderColor: colors.primary600,
    borderRadius: 200,
    borderWidth: 3,
    overflow: "hidden",
    height: 300,
    margin: 36,
    width: 300,
  },
  summaryText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});
