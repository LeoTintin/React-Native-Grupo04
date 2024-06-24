import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ContextType = {
  modal: boolean;
  setModal: (value: boolean) => void;
  handleModal: () => void;
  loginAuth: (email: string, password: string) => void;
  logoutAuth: () => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  name: string;
  setName: (value: string) => void;
};

const Context = createContext<ContextType>({
  modal: false,
  setModal: () => {},
  handleModal: () => {},
  loginAuth: () => {},
  logoutAuth: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  name: "",
  setName: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const nav = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
    nav.navigate("StackLogin", { name: "home" });
  };

  const loginAuth = async (email: string, password: string) => {
    try {
      const response = await axios.get(
        "https://6674c3d075872d0e0a9779f9.mockapi.io/Usuario"
      );

      const users = response.data;

      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      );

      if (user) {
        setEmail(user.email);
        setPassword(user.password);
        setName(user.name);
        await storeData(user.email, user.password);
        nav.navigate("StackHome", { name: "home" });
      } else {
        Alert.alert("Erro na autenticação", "Email ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro na autenticação:", error);
    }
  };

  const logoutAuth = () => {
    setEmail("");
    setPassword("");
    storeData("", "");
    nav.navigate("StackLogin", { name: "login" });
  };

  const storeData = async (email: string, password: string) => {
    try {
      await AsyncStorage.setItem(
        "@userInfo",
        JSON.stringify({ email, password })
      );
    } catch (error) {
      console.error(error);
    }
  };
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@userInfo");
      if (value !== null) {
        const { email, password } = JSON.parse(value);
        if (email && password) {
          await loginAuth(email, password);
        } else {
          nav.navigate("StackLogin", { name: "login" });
        }
      } else {
        nav.navigate("StackLogin", { name: "login" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <Context.Provider
      value={{
        modal,
        setModal,
        handleModal,
        loginAuth,
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        logoutAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
