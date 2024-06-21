import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { AreaAluno } from "../Pages/AreaAluno";
import { Home } from "../Pages/Home";

export type RootTabParamsList = {
  TabHome: { name: string };
  TabAreaAluno: { name: string };
};

const Tab = createBottomTabNavigator<RootTabParamsList>();

export function TabsRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TabHome" component={Home} />
      <Tab.Screen name="TabAreaAluno" component={AreaAluno} />
    </Tab.Navigator>
  );
}
