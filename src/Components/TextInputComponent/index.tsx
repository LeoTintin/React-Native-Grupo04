import React from "react";
import { TextInput } from "react-native";
import { styles } from "./style";

type PropsComponent = {
  placeHolder: string;
  value: string;
  inputtype?: boolean;
  handleonChange: (value: string) => void;
};

export function TextInputComponent({
  handleonChange,
  placeHolder,
  value,
  inputtype,
}: PropsComponent) {
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={handleonChange}
        secureTextEntry={inputtype}
        value={value}
        placeholder={placeHolder}
      />
    </>
  );
}
