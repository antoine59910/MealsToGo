import "react-native-gesture-handler";

import React, { useState, useEffect } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";

import { AuthContextProvider } from "./src/services/auth/auth.context";

import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </AuthContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
