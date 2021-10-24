import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FLOWERS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import FlowerDetails from "../components/FlowerDetails";
import Colors from "../constants/Colors";

const FlowerDetailsScreen = (props) => {
  const flowerId = props.navigation.getParam("flowerId");
  const selectedFlower = FLOWERS.find((flower) => flower.id === flowerId);
  return (
    <FlowerDetails
      title={selectedFlower.title}
      photo={selectedFlower.photo}
      temp={selectedFlower.temp}
      easy={selectedFlower.easy}
      hard={selectedFlower.hard}
      sun={selectedFlower.likeSun}
      dark={selectedFlower.likeDark}
      aLotWater={selectedFlower.needALotOfWater}
      notALotOfWater={selectedFlower.dontNeedALotOfWater}
      howOftenToFertilize={selectedFlower.howOftenToFertilize}
      description={selectedFlower.description}
      onAddBtn={() => {
        props.navigation.back();
      }}
    />
  );
};

FlowerDetailsScreen.navigationOptions = (navigationData) => {
  const flowerId = navigationData.navigation.getParam("flowerId");
  const selectedFlower = FLOWERS.find((flower) => flower.id === flowerId);
  return {
    headerTitle: selectedFlower.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="add"
          iconName={
            Platform.OS === "android" ? "add-circle-outline" : "ios-add"
          }
          onPress={() => {}}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
});

export default FlowerDetailsScreen;
