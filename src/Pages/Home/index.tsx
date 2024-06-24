import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { styles } from "./style";

export function Home() {
  const [expandedNoticeIds, setExpandedNoticeIds] = useState<number[]>([]);
  const [expandedEventIds, setExpandedEventIds] = useState<number[]>([]);

  const toggleNotice = (id: number) => {
    setExpandedNoticeIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((noticeId) => noticeId !== id) : [...prevIds, id]
    );
  };

  const toggleEvent = (id: number) => {
    setExpandedEventIds((prevIds) =>
      prevIds.includes(id) ? prevIds.filter((eventId) => eventId !== id) : [...prevIds, id]
    );
  };

  const importantNotices = [
    {
      id: 1,
      title: "Boa tarde, pessoal!",
      content: "Parabéns pela conclusão da disciplina Desenvolvimento de API Restfu!🥳\n\nAo final de cada disciplina vocês DEVERÃO (NÃO É OPCIONAL) preencher um formulário de avaliação sobre a disciplina, as demais atividades (inglês, mentoria, etc) e a Residência em TIC/Software de maneira geral.\n\nÉ muito importante que vocês preencham o formulário com sinceridade, pois a opinião de cada um de vocês é determinante para a qualidade do curso e ajustes de percurso!\n\nO formulário estará aberto até 31/05",
    },
    {
      id: 2,
      title: "Boa tarde, pessoal!",
      content: "Parabéns pela conclusão da disciplina Desenvolvimento WEB!🥳\n\nÉ importante que vocês preencham o formulário com sinceridade, pois a opinião de cada um de vocês é determinante para a qualidade do curso e ajustes de percurso!\n\nO formulário estará aberto até 13/06\n\nLink: https://forms.gle/HxRETWYWXYuKaP1f6\n\nDesde já agradecemos pela sua participação!",
    },
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
          <TouchableOpacity key={notice.id} style={styles.notice} onPress={() => toggleNotice(notice.id)}>
            <Text style={styles.noticeTitle}>{notice.title}</Text>
            <Text
              style={expandedNoticeIds.includes(notice.id) ? styles.noticeContentExpanded : styles.noticeContent}
              numberOfLines={expandedNoticeIds.includes(notice.id) ? undefined : 3}
            >
              {notice.content}
            </Text>
            {!expandedNoticeIds.includes(notice.id) && (
              <Text style={styles.readMore}>Leia mais</Text>
            )}
          </TouchableOpacity>
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
          <TouchableOpacity key={event.id} style={styles.event} onPress={() => toggleEvent(event.id)}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text
              style={expandedEventIds.includes(event.id) ? styles.eventDescriptionExpanded : styles.eventDescription}
              numberOfLines={expandedEventIds.includes(event.id) ? undefined : 3}
            >
              {event.description}
            </Text>
            {!expandedEventIds.includes(event.id) && (
              <Text style={styles.readMore}>Leia mais</Text>
            )}
            <TouchableOpacity onPress={() => Linking.openURL(event.link)}>
              <Text style={styles.eventLink}>Inscrições: {event.link}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
