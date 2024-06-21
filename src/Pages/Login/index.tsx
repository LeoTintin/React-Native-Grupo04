import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styled } from "./style";
import { useNavigation } from "@react-navigation/native";
import { TabsRoutes } from "../../Routes/TabsRoutes";
export function Login() {
  const nav = useNavigation();

  const handleLogin = () => {
    nav.navigate("StackHome", { name: "home" });
  };

  return (
    <View style={styled.container}>
      <View style={styled.caixa}>
        <TextInput
          style={styled.TextInput}
          placeholder="Aluno ou Responsável"
        />
        <TextInput style={styled.TextInput} placeholder="Senha" />
        <TouchableOpacity style={styled.button} onPress={handleLogin}>
          <Text style={styled.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        <Text style={styled.forgor}>Esqueceu a senha?</Text>
      </View>
    </View>
  );
}
