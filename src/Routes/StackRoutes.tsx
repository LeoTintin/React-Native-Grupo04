import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Pages/Login";
import { DrawerRoutes } from "./DrawerRoutes";
import { AreaAluno } from "../Pages/AreaAluno";

export type RootStackParamsList = {
  StackLogin: { name: string };
  StackHome: { name: string };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackHome" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}
