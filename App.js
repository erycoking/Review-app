import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Fonts from "expo-font";
import drawer from "./routes/drawer";
import { AppLoading } from "expo";

const getFonts = () =>
  Fonts.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return drawer();
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
