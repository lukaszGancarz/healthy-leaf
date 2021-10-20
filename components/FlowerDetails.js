import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from "react-native";

import Colors from "../constants/Colors";

const FlowerDetails = (props) => {
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>
          <ImageBackground style={styles.img} source={{ uri: props.photo }}>
            <Text style={styles.title}>{props.title}</Text>
          </ImageBackground>
          <Text style={styles.characteristic}>Charakterystyka:</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    width: "100%",
    height: 500,
  },
  title: {
    textAlign: "center",
    backgroundColor: "rgba(0,0,0, 0.3)",
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 35,
    paddingVertical: 5,
  },
  characteristic: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
});

export default FlowerDetails;
