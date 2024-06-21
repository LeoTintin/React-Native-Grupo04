import { RootDrawerParamsList } from "./DrawerRoutes";
import { RootStackParamsList } from "./StackRoutes";
import { RootTabParamsList } from "./TabsRoutes";


declare global {
    namespace ReactNavigation{
        interface RootParamList extends RootStackParamsList{}
        interface RootParamList extends RootTabParamsList{}
        interface RootParamList extends RootDrawerParamsList{}
    }
}