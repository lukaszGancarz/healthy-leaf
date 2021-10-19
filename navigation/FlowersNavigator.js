import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryFlowersScreen from "../screens/CategoryFlowersScreen";
import FlowerDetailsScreen from "../screens/FlowerDetailsScreen";

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
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "black",
      },
      headerTintColor:
        Platform.OS === "android" ? "black" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(FlowersNavigator);
