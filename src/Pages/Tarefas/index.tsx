import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Task, tasksData } from './tasksData'; 
import styles from './style';

const TelaDeTarefas = () => {
  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{item.titulo}</Text>
      {item.dataVencimento ? (
        <Text style={styles.taskDueDate}>Vencimento: {item.dataVencimento}</Text>
      ) : (
        <Text style={styles.taskDueDate}>Sem prazo de entrega</Text>
      )}
      {item.concluida && <Text style={styles.taskCompleted}>Concluído</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tarefas Futuras</Text>
      <FlatList
        data={tasksData.filter(task => !task.concluida)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text style={styles.header}>Tarefas Passadas</Text>
      <FlatList
        data={tasksData.filter(task => task.concluida)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TelaDeTarefas;
