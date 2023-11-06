import React from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Rechercher"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    justifyContent: "center",
    flex: 1 / 20,
  },
  list: {
    padding: 16,
    flex: 19 / 20,
    backgroundColor: "blue",
  },
});
