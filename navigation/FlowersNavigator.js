import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryFlowersScreen from "../screens/CategoryFlowersScreen";
import FlowerDetailsScreen from "../screens/FlowerDetailsScreen";

const FlowersNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryFlowers: CategoryFlowersScreen,
  FlowerDetails: { screen: FlowerDetailsScreen },
});

export default createAppContainer(FlowersNavigator);
