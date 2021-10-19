import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
  ImageBackground,
} from "react-native";

const FlowerItem = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21)
    TouchableCmp = TouchableNativeFeedback;

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
    <View style={styles.flowerItem}>
      <TouchableCmp onPress={props.onSelectFlower}>
        <View>
          <View style={{ ...styles.flowerRow, ...styles.flowerHeader }}>
            <ImageBackground
              source={{ uri: props.photo }}
              style={styles.bgImage}
            >
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.flowerRow, ...styles.flowerDetail }}>
            <View style={{ ...styles.flowerRow, ...styles.images }}>
              <Image source={easy} />
            </View>
            <View style={{ ...styles.flowerRow, ...styles.images }}>
              <Image source={temp} />
            </View>
            <View style={{ ...styles.flowerRow, ...styles.images }}>
              <Image source={logo} />
            </View>
            {waterNeeded === 1 && (
              <Image source={require("../images/drop.png")} />
            )}
            {waterNeeded === 2 && (
              <View style={{ ...styles.flowerRow, ...styles.images }}>
                <Image source={require("../images/drop.png")} />
                <Image source={require("../images/drop.png")} />
              </View>
            )}
            {waterNeeded === 3 && (
              <View style={{ ...styles.flowerRow, ...styles.images }}>
                <Image source={require("../images/drop.png")} />
                <Image source={require("../images/drop.png")} />
                <Image source={require("../images/drop.png")} />
              </View>
            )}
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  flowerItem: {
    height: 200,
    width: "98%",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  flowerRow: {
    flexDirection: "row",
  },
  flowerHeader: {
    height: "82%",
  },
  flowerDetail: {
    paddingHorizontal: 5,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingVertical: 2
  },
  title: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    fontFamily: "open-sans-bold",
    color: 'white',
    fontSize: 24,
    paddingHorizontal: 10,
  },
  images: {
    paddingHorizontal: 5,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});

export default FlowerItem;
