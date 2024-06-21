import React from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { styles } from "./style";

export function AreaAluno() {
  const arrayMoc = [
    {
      id: 1,
      materia: "React Native",
      p01: 29,
      p02: 60,
      conceito: 10,
      faltas: "75%",
    },
    {
      id: 2,
      materia: "React Native",
      p01: 29,
      p02: 60,
      conceito: 10,
      faltas: "75%",
    },
    {
      id: 3,
      materia: "React Native",
      p01: 29,
      p02: 60,
      conceito: 10,
      faltas: "75%",
    },
    {
      id: 4,
      materia: "React Native",
      p01: 29,
      p02: 60,
      conceito: 10,
      faltas: "75%",
    },
    {
      id: 5,
      materia: "React Native",
      p01: 29,
      p02: 60,
      conceito: 10,
      faltas: "75%",
    },
    {
      id: 6,
      materia: "React Native",
      p01: 29,
      p02: 60,
      conceito: 10,
      faltas: "75%",
    },
  ];

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <Text style={styles.headerTextName}>NOME ALUNO</Text>
          <Text style={styles.headerTextEmail}>aluno@email.com</Text>
          <Icon
            name="person-circle"
            style={styles.icon}
            color={"#fff"}
            size={60}
          />
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
            <Text style={styles.cardText}>conceito: {item.conceito}</Text>
          </View>
        </View>
      )}
    />
  );
}
