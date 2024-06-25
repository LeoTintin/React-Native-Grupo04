import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { styled } from "./style";
import { useNavigation } from "@react-navigation/native";
import { TabsRoutes } from "../../Routes/TabsRoutes";
import Icon from "@expo/vector-icons/Ionicons";
import { ButtonComponent } from "../../Components/ButtomComponent";
import { useAuth } from "../../Hooks/useAuth";
import logo from "../../Assets/logo.png"
export function Login() {
  const handleEmail = (value: string) => {
    setEmail(value);
  };
 
  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const nav = useNavigation();

  const { loginAuth, email, password, setEmail, setPassword } = useAuth();

  const handleLogin = () => {
    loginAuth(email, password);
  };

  const handleCadastro = () => {
    nav.navigate("StackCadastro", { name: "cadastro" });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styled.container}>
      <Image style={{height:'15%',width:'30%', margin:25}} source={logo} alt="logo"/>
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
              onChangeText={handleEmail}
              value={email}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={styled.icons}
              name="lock-closed"
              color={"#868686"}
              size={35}
            />
            <TextInput
              style={styled.TextInput}
              placeholder="Senha"
              onChangeText={handlePassword}
              value={password}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={[styled.button,{backgroundColor: email && password ?'#1768B2':'#868686'}]} onPress={handleLogin}>
            <Text style={styled.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <Text style={styled.forgor}>Esqueceu a senha?</Text>
        </View>
        <View style={{ width: "80%" }}>
          <ButtonComponent
            title="Faça seu cadastro"
            handleOnChange={handleCadastro}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
