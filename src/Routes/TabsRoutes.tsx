import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AreaAluno } from "../Pages/AreaAluno";

export type RootTabParamsList = {
  TabAreaAluno: { name: string };
};

const Tab = createBottomTabNavigator<RootTabParamsList>();

export function TabsRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TabAreaAluno" component={AreaAluno} />
    </Tab.Navigator>
  );
}
