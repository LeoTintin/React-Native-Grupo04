import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, View } from "react-native";
import logov1 from "../../Assets/logoV1.jpg";
export function CustomDrawerComponent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: 30,
        }}
      >
        <Image source={logov1} style={{ width: 70, height: 70 }} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
