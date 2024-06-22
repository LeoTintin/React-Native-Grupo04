import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInputComponent } from "../../Components/TextInputComponent";
import { ButtonComponent } from "../../Components/ButtomComponent";
import { styles } from "./style";
import { useAuth } from "../../Hooks/useAuth";
import { ModalComponent } from "../../Components/ModalComponenet";

export function Cadastro() {
  interface User {
    id?: number | string;
    name: string;
    email: string;
    password: string;
  }

  const [data, setData] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const [load, setLoad] = useState(false);
  const { setModal } = useAuth();

  const validateFields = (): boolean => {
    if (!data.name || !data.email || !data.password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return false;
    }
    return true;
  };

  const handlePost = async () => {
    if (!validateFields()) return;
    setLoad(true);
    try {
      const response = await axios.post(
        "https://6674c3d075872d0e0a9779f9.mockapi.io/Usuario",
        { name: data.name, email: data.email, password: data.password }
      );
      setData(response.data);
      console.log(data);
      setModal(true);
      //colocar o modal de sucesso aqui
    } catch (error) {
      console.error("erro na requisição", error);
      //colocar o modal de erro aqui
    } finally {
      setLoad(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Faça seu cadastro!</Text>
        </View>
        <Text style={styles.text}>Nome:</Text>
        <TextInputComponent
          placeHolder="Informe seu nome completo"
          value={data.name}
          inputtype={false}
          handleonChange={(text) => setData({ ...data, name: text })}
        />
        <Text style={styles.text}>Email:</Text>
        <TextInputComponent
          placeHolder="Informe seu email"
          value={data.email}
          inputtype={false}
          handleonChange={(text) => setData({ ...data, email: text })}
        />
        <Text style={styles.text}>Senha:</Text>
        <TextInputComponent
          placeHolder="Informe sua senha"
          value={data.password}
          inputtype={true}
          handleonChange={(text) => setData({ ...data, password: text })}
        />
        <ButtonComponent
          handleOnChange={handlePost}
          title="Cadastrar"
          disable={load}
        />
        <ModalComponent title="Cadastro efetuado" />
      </View>
    </TouchableWithoutFeedback>
  );
}
