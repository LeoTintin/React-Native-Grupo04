import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./DrawerRoutes";
import { StackRoutes } from "./StackRoutes";
import { AuthProvider } from "../Hooks/useAuth";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
