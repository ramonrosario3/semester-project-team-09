import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[{ name: 1 }, { name: 2 }]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
