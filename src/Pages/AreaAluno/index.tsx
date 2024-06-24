import React from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { styles } from "./style";
import { useAuth } from "../../Hooks/useAuth";

export function AreaAluno() {
  const { email, name } = useAuth();

  const arrayMoc = [
    {
      id: 1,
      materia: "Lógica de Programação",
      p01: 30,
      p02: 60,
      conceito: 10,
      faltas: "0%",
    },
    {
      id: 2,
      materia: "Banco de dados",
      p01: 30,
      p02: 60,
      conceito: 10,
      faltas: "0%",
    },
    {
      id: 3,
      materia: "Programação orientada a objetos",
      p01: 30,
      p02: 60,
      conceito: 10,
      faltas: "0%",
    },
    {
      id: 4,
      materia: "Desenvolvimento de API Restful",
      p01: 30,
      p02: 60,
      conceito: 10,
      faltas: "0%",
    },
    {
      id: 5,
      materia: "Desenvolvimento WEB - React",
      p01: 30,
      p02: 60,
      conceito: 10,
      faltas: "0%",
    },
    {
      id: 6,
      materia: "Desenvolvimento Mobile - React Native",
      p01: 30,
      p02: 60,
      conceito: 10,
      faltas: "0%",
    },
  ];

  return (
    <FlatList
      ListHeaderComponent={
        <View style={styles.cardUser}>
          <View>
            <Text style={styles.headerTextName}>{name}</Text>
            <Text style={styles.headerTextEmail}>{email}</Text>
          </View>
          <View>
            <Icon
              name="person-circle"
              style={styles.icon}
              color={"#fff"}
              size={60}
            />
          </View>
        </View>
      }
      contentContainerStyle={{ backgroundColor: "#1768B2" }}
      data={arrayMoc}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.cardTextTitulo}>{item.materia}</Text>
            <Text style={styles.cardText}>
              Avaliação individual: {item.p01}
            </Text>
            <Text style={styles.cardText}>Avaliação em grupo: {item.p02}</Text>
            <Text style={styles.cardText}>Conceito: {item.conceito}</Text>
            <Text style={styles.cardTextLine}>Faltas: {item.faltas}</Text>
          </View>
        </View>
      )}
    />
  );
}
