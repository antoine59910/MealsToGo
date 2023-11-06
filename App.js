import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

export default function App() {

  const IsAndroid = Platform.OS === 'android';


  console.log(StatusBar.currentHeight);

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <ExpoStatusBar />
        <View style={{ padding: 16, backgroundColor: "green", flex: 1 / 20 }}>
          <Text>Search</Text>
        </View>
        <View style={{ padding: 16, flex: 19 / 20, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
});
