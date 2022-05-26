import React from "react";

import { NavigationContainer} from "@react-navigation/native"
import Routes from "./src/routes"

import GeneralStatusBarColor from "./src/Components/GeneralStatusBarColor"


import Mocks from "./src/mocks/index.js"
export default function App() {
  return (
    <NavigationContainer>
      <GeneralStatusBarColor backgroundColor="#3f435f" barStyle="light-content"/>
        <Routes {...Mocks}/>
    </NavigationContainer>
  )
};
