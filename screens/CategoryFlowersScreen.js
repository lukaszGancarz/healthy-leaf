import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import FlowerItem from "../components/FlowerItem";

import { CATEGORIES, FLOWERS } from "../data/dummy-data";

const CategoryFlowersScreen = (props) => {
  const renderFlowerItem = (itemData) => {
    return (
      <FlowerItem
        title={itemData.item.title}
        photo={itemData.item.photo}
        temp={itemData.item.temp}
        easy={itemData.item.easy}
        hard={itemData.item.hard}
        sun={itemData.item.likeSun}
        dark={itemData.item.likeDark}
        aLotWater={itemData.item.needALotOfWater}
        notALotOfWater={itemData.item.dontNeedALotOfWater}
        onSelectFlower={() => {
          props.navigation.navigate({
            routeName: "FlowerDetails",
            params: {
              flowerId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const displayedFlowers = FLOWERS.filter((flower) =>
    flower.categoryId.includes(catId)
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedFlowers}
        keyExtractor={(item, index) => item.id}
        renderItem={renderFlowerItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryFlowersScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return { headerTitle: selectedCategory.title };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 5,
  },
});

export default CategoryFlowersScreen;
