import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "../screens/WelcomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryFlowersScreen from "../screens/CategoryFlowersScreen";
import FlowerDetailsScreen from "../screens/FlowerDetailsScreen";
import GardenScreen from "../screens/GardenScreen";

import Colors from "../constants/Colors";

const FlowersNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { headerTitle: "Kategorie Kwiatów" },
    },
    CategoryFlowers: CategoryFlowersScreen,
    FlowerDetails: { screen: FlowerDetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "black",
      },
      headerTintColor:
        Platform.OS === "android" ? "black" : Colors.primaryColor,
    },
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Flowers: {
      screen: FlowersNavigator,
      navigationOptions: {
        tabBarLabel: "Główna",
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="home" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Garden: {
      screen: GardenScreen,
      navigationOptions: {
        tabBarLabel: "Ogród",
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons
              name="flower-tulip-outline"
              size={25}
              color={tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      backgroundColor:
        Platform.OS === "android" ? Colors.primaryColor : "black",
      activeTintColor: Colors.accentColor,
      inactiveTintColor: Platform.OS === "ios" ? Colors.primaryColor : "black",
      style: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "black",
      },
      showIcon: true,
    },
  }
);

const mainNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  BottomNavigator: {
    screen: BottomTabNavigator,
    navigationOptions: { headerShown: false },
  },
});

export default createAppContainer(mainNavigator);
