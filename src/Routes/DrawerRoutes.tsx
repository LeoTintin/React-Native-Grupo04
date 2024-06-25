import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Login } from "../Pages/Login";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { TabsRoutes } from "./TabsRoutes";
import { Cadastro } from "../Pages/Cadastro";
import { useAuth } from "../Hooks/useAuth";
import { Image, Text, View } from "react-native";
import logo from "../Assets/logo.png";
import { CustomDrawerComponent } from "../Components/CustomDrawerComponent";

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
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      screenOptions={({ navigation }) => ({
        headerTintColor: "#fff",
        headerStyle: {
          height: 90,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: "#1768B2",
        },
        headerLeft: () => (
          <Feather
            name="align-left"
            size={30}
            color={"#fff"}
            style={{ marginLeft: 15, marginRight: -5 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      })}
    >
      <Drawer.Screen
        name="DrawerHome"
        component={TabsRoutes}
        options={{
          headerTitle: () => (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                TecSerra
              </Text>
              <Image source={logo} style={{ width: 30, height: 30 }} />
            </View>
          ),
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
          headerTitle: "Cadastro",
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
