import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";

import Colors from "../constants/Colors";

const FlowerDetails = (props) => {
  let logo = require("../images/dark.png");
  if (props.sun && props.dark) logo = require("../images/darkSun.png");
  else if (props.sun) logo = require("../images/sun.png");

  let waterNeeded = 1;
  if (
    (props.aLotWater && props.notALotOfWater) ||
    (!props.aLotWater && !props.notALotOfWater)
  )
    waterNeeded = 2;
  if (props.aLotWater && !props.notALotOfWater) waterNeeded = 3;

  let easy = require("../images/easy.png");
  if (props.easy && props.hard) easy = require("../images/normal.png");
  else if (props.hard) easy = require("../images/hard.png");

  let temp = require("../images/lowTemp.png");
  if (props.temp === 2) temp = require("../images/normalTemp.png");
  if (props.temp === 3) temp = require("../images/highTemp.png");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground style={styles.img} source={{ uri: props.photo }}>
            <Text style={styles.title}>{props.title}</Text>
          </ImageBackground>
          <Text style={styles.characteristic}>Charakterystyka:</Text>
          <View style={styles.row}>
            <Text style={styles.details}>Wymagane nasłonecznienie:</Text>
            <Image source={logo} />
          </View>
          <View style={styles.row}>
            <Text style={styles.details}>Zapotrzebowanie na wodę:</Text>
            {waterNeeded === 1 && (
              <Image
                source={require("../images/drop.png")}
                style={{ flexDirection: "row" }}
              />
            )}
            {waterNeeded === 2 && (
              <View style={{ flexDirection: "row" }}>
                <Image source={require("../images/drop.png")} />
                <Image source={require("../images/drop.png")} />
              </View>
            )}
            {waterNeeded === 3 && (
              <View style={{ flexDirection: "row" }}>
                <Image source={require("../images/drop.png")} />
                <Image source={require("../images/drop.png")} />
                <Image source={require("../images/drop.png")} />
              </View>
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.details}>Poziom trudności:</Text>
            <Image source={easy} />
          </View>
          <View style={styles.row}>
            <Text style={styles.details}>Wymagana temperatura:</Text>
            <Image source={temp} />
          </View>
          <View style={styles.row}>
            <Text style={styles.details}>Jak często nawozić:</Text>
            <Text style={styles.details}>Co {props.howOftenToFertilize} dni</Text>
          </View>
          <View style={styles.description}>
          <Text style={styles.characteristic}>Opis:</Text>
          <Text style={styles.descriptionText}>{props.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cccccc",
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
    margin: 15,
    paddingBottom: 10,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    paddingBottom: 3,
    alignItems: "center",
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 1,
  },
  details: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
  description: {
    marginVertical: 10,
  },
  descriptionText: {
    fontFamily: "open-sans",
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 10,
    lineHeight: 27,
  }
});

export default FlowerDetails;
