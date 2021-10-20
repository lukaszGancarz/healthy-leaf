import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

import Colors from "../constants/Colors";

const FlowerDetails = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21)
    TouchableCmp = TouchableNativeFeedback;

  return (
    <View style={styles.container}>
      <TouchableCmp>
        <ImageBackground style={styles.img} source={{ uri: props.photo }}>
          <Text style={styles.title}>{props.title}</Text>
        </ImageBackground>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    width: "100%",
    height: "80%",
  },
  title: {
    textAlign: "center",
    backgroundColor: "rgba(0,0,0, 0.3)",
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 35,
    paddingVertical: 5,
  },
});

export default FlowerDetails;
