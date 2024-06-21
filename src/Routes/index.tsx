import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./DrawerRoutes";
import { StackRoutes } from "./StackRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
