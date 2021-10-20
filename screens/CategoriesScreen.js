import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryFlowers",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        style={styles.screen}
      />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default CategoriesScreen;
