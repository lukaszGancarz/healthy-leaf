import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
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

  return (
    <View style={styles.flowerItem}>
      <TouchableCmp onPress={props.onSelectFlower}>
        <View>
          <View style={{ ...styles.flowerRow, ...styles.flowerHeader }}>
            <Text>{props.title}</Text>
          </View>
          <View style={{ ...styles.flowerRow, ...styles.flowerDetail }}>
            <Image source={logo} />
            {waterNeeded === 1 && (
              <Image source={require("../images/drop.png")} />
            )}
            {waterNeeded === 2 && (
              <View style={styles.flowerRow}>
                <Image source={require("../images/drop.png")} />
                <Image source={require("../images/drop.png")} />
              </View>
            )}
            {waterNeeded === 3 && (
              <View style={styles.flowerRow}>
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
    width: "100%",
    backgroundColor: "#ccc",
  },
  flowerRow: {
    flexDirection: "row",
  },
  flowerHeader: {
    height: "82%",
  },
  flowerDetail: {
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
});

export default FlowerItem;
