import React from "react";
import { ScrollView } from "react-native";
import { VStack } from "@gluestack-ui/themed";
import AmenitiesSection from "./sidebar/AmenitiesSection";
import BookingOptions from "./sidebar/BookingOptions";
import CustomerRatingSection from "./sidebar/CustomerRatingSection";

import PriceRangeSection from "./sidebar/PriceRangeSection";
import SortBySection from "./sidebar/SortBySection";

const Sidebar = () => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
      <VStack space="xl" py="$6" px="$4">
      
        <VStack space="xl" px="$2">
          <SortBySection />
  
          <AmenitiesSection />
          <PriceRangeSection />
          <BookingOptions />
          <CustomerRatingSection />
        </VStack>
      </VStack>
    </ScrollView>
  );
};
export default Sidebar;
