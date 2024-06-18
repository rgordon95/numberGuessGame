import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./constants/colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [appIsReady, setAppIsReady] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
    setGameIsOver(true);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(true);
    setGuessRounds(0);
  };

  const [fontsLoaded, fontError] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber && !gameIsOver) {
    screen = (
      <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} setGameIsOver={setGameIsOver} />
    );
  }

  if (userNumber && gameIsOver) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
        userNumber={userNumber}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.secondary500]}
      style={styles.container}
    >
      <ImageBackground
        imageStyle={{ opacity: 0.2 }}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        style={styles.container}
      >
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
