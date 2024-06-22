import React from "react";
import { styles } from "./style";
import { Text, TouchableOpacity, View } from "react-native";

interface PropsComponent {
  title: string;
  handleOnChange: () => void;
  disable?: boolean;
}

export function ButtonComponent({
  handleOnChange,
  title,
  disable,
}: PropsComponent) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleOnChange}
        style={styles.button}
        disabled={disable}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
