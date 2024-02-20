import React, { useState } from "react";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.AccordionGroup>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            id="1"
          >
            <List.Item title="oeufs mimolette" />
            <List.Item title="prout" />
            <List.Item title="Choix 3" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
            id="2"
          >
            <List.Item title="hamburger frites" />
            <List.Item title="prout" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
            id="3"
          >
            <List.Item title="hamburger frites" />
            <List.Item title="prout" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
            id="4"
          >
            <List.Item title="VODKAAAA" />
            <List.Item title="sprite" />
          </List.Accordion>
        </List.AccordionGroup>
      </ScrollView>
    </SafeArea>
  );
};
