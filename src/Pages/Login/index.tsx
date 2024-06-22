import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styled } from "./style";
import { useNavigation } from "@react-navigation/native";
import { TabsRoutes } from "../../Routes/TabsRoutes";
import Icon from "@expo/vector-icons/Ionicons";
export function Login() {
  const nav = useNavigation();

  const handleLogin = () => {
    nav.navigate("StackHome", { name: "home" });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styled.container}>
        <View style={styled.caixa}>
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={styled.icons}
              name="person-circle"
              color={"#868686"}
              size={40}
            />
            <TextInput
              style={styled.TextInput}
              placeholder="Aluno ou Responsável"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={styled.icons}
              name="lock-closed"
              color={"#868686"}
              size={35}
            />
            <TextInput style={styled.TextInput} placeholder="Senha" />
          </View>

          <TouchableOpacity style={styled.button} onPress={handleLogin}>
            <Text style={styled.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <Text style={styled.forgor}>Esqueceu a senha?</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
