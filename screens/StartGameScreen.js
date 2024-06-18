import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Title from "../components/ui/Title";

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputNumber) => {
    setEnteredNumber(inputNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (
      chosenNumber === "" ||
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99
    ) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    pickedNumberHandler(chosenNumber);
  };

  return (
    <View style={styles.screenContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          maxLength={2}
          style={styles.input}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>
              Start Game
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    height: 50,
    fontSize: 32,
    fontFamily: "OpenSans-Bold",
    marginVertical: 8,
    textAlign: "center",
    width: 50,
  },
  screenContainer: {
    alignItems: "center",
    flex: 1,
    marginTop: 100,
  },

});
