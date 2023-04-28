import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalRoutes } from "./global.routes";
import { StatusBar } from "expo-status-bar";

export function Routes() {
  return (
    <NavigationContainer>
      <GlobalRoutes />
    </NavigationContainer>
  );
}
