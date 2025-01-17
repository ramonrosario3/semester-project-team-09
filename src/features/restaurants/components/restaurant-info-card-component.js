import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";

import {
  Address,
  Icon,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card-styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurante El Chinchorro #4",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Plaza de estrellas",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label"> {name} </Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address> {address} </Address>
      </Info>
    </RestaurantCard>
  );
};
