import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Login } from "../Pages/Login";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { TabsRoutes } from "./TabsRoutes";
import { Cadastro } from "../Pages/Cadastro";
import { useAuth } from "../Hooks/useAuth";

export type RootDrawerParamsList = {
  DrawerLogin: { name: string };
  DrawerHome: { name: string };
  DrawerCadastro: { name: string };
};

const Drawer = createDrawerNavigator<RootDrawerParamsList>();

export function DrawerRoutes() {
  const nav = useNavigation();
  const { logoutAuth } = useAuth();

  const handleLogout = () => {
    nav.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "StackLogin" }],
      })
    );
    logoutAuth();
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerHome"
        component={TabsRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Inicio",
        }}
      />
      <Drawer.Screen
        name="DrawerCadastro"
        component={Cadastro}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="adduser" color={color} size={size} />
          ),
          drawerLabel: "Cadastro",
        }}
      />
      <Drawer.Screen
        listeners={{ focus: handleLogout }}
        name="DrawerLogin"
        component={Login}
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
