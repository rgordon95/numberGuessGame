import {Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {

    const { height, width } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        borderRadius: imageSize / 2,
        height: imageSize,
        width: imageSize,
    };

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.boldText}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.boldText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
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
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
  },
  summaryText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  screen: {
    flex: 1,
  }
});
