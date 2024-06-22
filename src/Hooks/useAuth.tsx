import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useState } from "react";

export type ContextType = {
  modal: boolean;
  setModal: (value: boolean) => void;
  handleModal: () => void;
};

const Context = createContext<ContextType>({
  modal: false,
  setModal: () => {},
  handleModal: () => {},
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

  // const loginAuth = (email: string, password: string) => {
  //   if (email === "" || password === "") {
  //     setModal(!modal);
  //   } else {
  //     nav.navigate("StackHome", { name: "home" });
  //   }
  // };

  return (
    <Context.Provider
      value={{
        modal,
        setModal,
        handleModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => useContext(Context);
