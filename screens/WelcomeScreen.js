import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const WelcomeScreen = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21)
    TouchableCmp = TouchableNativeFeedback;
  return (
    <TouchableCmp onPress={() => props.navigation.replace("Categories")}>
      <ImageBackground
        style={styles.screen}
        source={require("../images/garden.jpg")}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>HEALTHY LEAF</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Tap to Start!</Text>
        </View>
      </ImageBackground>
    </TouchableCmp>
  );
};

WelcomeScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 150,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 20,
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 40,
  },
  descriptionContainer: {
    marginBottom: 30,
  },
  description: {
    fontFamily: "open-sans",
    fontSize: 35,
  },
});

export default WelcomeScreen;
