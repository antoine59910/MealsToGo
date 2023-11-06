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
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

const ListView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;
