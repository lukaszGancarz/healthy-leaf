import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryFlowersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Flower Screen!</Text>
      <Button
        title="Go to details!"
        onPress={() => {
          props.navigation.navigate('FlowerDetails');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryFlowersScreen;
