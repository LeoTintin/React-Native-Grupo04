import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Feather } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";
import { AreaAluno } from "../Pages/AreaAluno";
import { Home } from "../Pages/Home";
import TaskScreen from "../Pages/Tarefas";

export type RootTabParamsList = {
  TabHome: { name: string };
  TabAreaAluno: { name: string };
  TabTarefas: { name: string };
};

const Tab = createBottomTabNavigator<RootTabParamsList>();

export function TabsRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          title: "Home",
        }}
      />
      <Tab.Screen
        name="TabAreaAluno"
        component={AreaAluno}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="graduation-cap" color={color} size={size} />
          ),
          title: "Notas/faltas",
        }}
      />
      <Tab.Screen
        name="TabTarefas"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" color={color} size={size} />
          ),
          title: "Tarefas",
        }}
      />
    </Tab.Navigator>
  );
}
// export function TabsRoutes2() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="TabAreaAluno" component={AreaAluno} />
//       <Tab.Screen name="TabHome" component={Home} />
//       <Tab.Screen name="TabTarefas" component={TaskScreen} />
//     </Tab.Navigator>
//   );
// }
