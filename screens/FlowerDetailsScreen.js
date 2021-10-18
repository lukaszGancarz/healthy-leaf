import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const FlowerDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Flower Details Screen!</Text>
      <Button title="Go to start!" onPress={()=>{
          props.navigation.popToTop();
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

export default FlowerDetailsScreen;
