import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FLOWERS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const FlowerDetailsScreen = (props) => {
  const flowerId = props.navigation.getParam("flowerId");
  const selectedFlower = FLOWERS.find((flower) => flower.id === flowerId);
  return (
    <View style={styles.screen}>
      <Text>The Flower Details Screen!</Text>
      <Button
        title="Go to start!"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

FlowerDetailsScreen.navigationOptions = (navigationData) => {
  const flowerId = navigationData.navigation.getParam("flowerId");
  const selectedFlower = FLOWERS.find((flower) => flower.id === flowerId);
  return {
    headerTitle: selectedFlower.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="add" iconName={Platform.OS === 'android' ? 'add-circle-outline' : "ios-add"} onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default FlowerDetailsScreen;
