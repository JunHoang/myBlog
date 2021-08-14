import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "./src/screen/IndexScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    InitialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
