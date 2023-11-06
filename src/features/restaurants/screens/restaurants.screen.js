import React from "react";
import { StatusBar, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchBarView>
        <Searchbar
          placeholder="Rechercher"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBarView>

      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchBarView = styled(View)`
  padding: 16px;
  justify-content: center;
`;

const ListView = styled(View)`
  padding: 16px;
  flex: 1;
  background-color: blue;
`;
