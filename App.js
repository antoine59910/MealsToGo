import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ExpoStatusBar />
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
    flex: 1 / 20,
  },
  list: {
    padding: 16,
    flex: 19 / 20,
    backgroundColor: "blue",
  },
});
