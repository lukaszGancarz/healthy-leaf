import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title="Go to flowers!" onPress={() => {
          props.navigation.navigate({routeName: 'CategoryFlowers'})
      }}/>
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

export default CategoriesScreen;
