import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../Hooks/useAuth";
import { styles } from "./style";

interface PropsModal {
  title: string;
}

export function ModalComponent({ title }: PropsModal) {
  const { modal, handleModal } = useAuth();
  return (
    <Modal transparent={true} visible={modal} animationType="slide">
      <View style={styles.containerModal}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.button} onPress={handleModal}>
            <Text style={styles.titleButton}>voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
