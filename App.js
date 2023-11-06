import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import * as React from "react";

export default function App() {
  return (
    <>
      <ExpoStatusBar />
      <RestaurantsScreen />
    </>
  );
}
