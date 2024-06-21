import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Task } from './types';
import styles from './style';

const tasks: Task[] = [
  { id: '1', name: 'Desenvolvimento Mobile', dueDate: '2023-06-30' },
  { id: '2', name: 'Banco de Dados', dueDate: '2023-07-15' },
  { id: '3', name: 'Front End Essencial', dueDate: '2023-08-01' },
];

const TaskScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskName}>{item.name}</Text>
      <Text style={styles.taskDueDate}>Data de Entrega: {item.dueDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas de Faculdade</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default TaskScreen;
