import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "@react-navigation/native";

import Login from "./../../screens/login";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
