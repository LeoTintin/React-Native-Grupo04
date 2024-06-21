import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { TabsRoutes } from "./TabsRoutes";
import { Login } from "../Pages/Login";
import { StackRoutes } from "./StackRoutes";
import { CommonActions, useNavigation } from "@react-navigation/native";

export type RootDrawerParamsList = {
  DrawerLogin: { name: string };
  DrawerAreaAluno: { name: string };
};

const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export function DrawerRoutes() {
  const nav = useNavigation();

  const handleLogout = () => {
    nav.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "StackLogin" }],
      })
    );
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerAreaAluno"
        component={TabsRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Inicio",
        }}
      />
      <Drawer.Screen
        listeners={{ focus: handleLogout }}
        name="DrawerLogin"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="log-out" color={color} size={size} />
          ),
          drawerLabel: "Sair",
        }}
      />
    </Drawer.Navigator>
  );
}
