import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { styles } from "./style";

export function Home() {
  const importantNotices = [
    { id: 1, title: "Aviso 1", content: "Detalhes do aviso 1..." },
    { id: 2, title: "Aviso 2", content: "Detalhes do aviso 2..." },
    // Adicione mais avisos conforme necessário
  ];

  const onlineClasses = [
    { id: 1, subject: "React Native", link: "https://meet.google.com/abc-defg-hij" },
    { id: 2, subject: "Banco de Dados", link: "https://meet.google.com/klm-nopq-rst" },
    // Adicione mais links conforme necessário
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Reunião sobre Projeto Aplicado",
      date: "Sábado, 22/06",
      description: "Residentes, bom dia!\n\nNo próximo sábado (22/06), teremos nossa reunião de apresentação sobre o Projeto Aplicado. Esse encontro é muito importante para que vocês saibam como desenvolver, da melhor forma possível, o trabalho final da residência, que terão as atuações direta dos Residentes Agilistas e das Empresas Parceiras.",
      link: "https://bit.ly/palestra20240622",
    },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.noticeContainer}>
        <Text style={styles.noticeHeader}>Avisos Importantes</Text>
        {importantNotices.map((notice) => (
          <View key={notice.id} style={styles.notice}>
            <Text style={styles.noticeTitle}>{notice.title}</Text>
            <Text style={styles.noticeContent}>{notice.content}</Text>
          </View>
        ))}
      </View>
      <View style={styles.classesContainer}>
        <Text style={styles.classesHeader}>Aulas Online</Text>
        {onlineClasses.map((classInfo) => (
          <TouchableOpacity
            key={classInfo.id}
            style={styles.classLink}
            onPress={() => Linking.openURL(classInfo.link)}
          >
            <Text style={styles.classSubject}>{classInfo.subject}</Text>
            <Text style={styles.classLinkText}>{classInfo.link}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsHeader}>Próximos Eventos</Text>
        {upcomingEvents.map((event) => (
          <View key={event.id} style={styles.event}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(event.link)}>
              <Text style={styles.eventLink}>Inscrições: {event.link}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
