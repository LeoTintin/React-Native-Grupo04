import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

export type ContextType = {
  modal: boolean;
  setModal: (value: boolean) => void;
  handleModal: () => void;
  loginAuth: (email: string, password: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};

const Context = createContext<ContextType>({
  modal: false,
  setModal: () => {},
  handleModal: () => {},
  loginAuth: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const nav = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
        console.log(email);
        nav.navigate("StackHome", { name: "home" });
      } else {
        Alert.alert("Erro", "Todos os campos são obrigatórios.");
      }
    } catch (error) {
      console.error("Erro na autenticação:", error);
    }
  };

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
