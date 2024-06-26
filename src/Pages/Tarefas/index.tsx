import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Task } from './types';
import styles from './style';

const initialTasks: Task[] = [
  { id: '1', name: 'Lógica de Programação', dueDate: '2024-06-28', completed: false },
  { id: '2', name: 'Banco de Dados', dueDate: '2024-06-29', completed: false },
  { id: '3', name: 'Programação Orientada a Objetos', dueDate: '2024-06-30', completed: false },
  { id: '4', name: 'Desenvolvimento de API Restful', dueDate: '2024-07-01', completed: false },
  { id: '5', name: 'Desenvolvimento WEB - React', dueDate: '2024-07-02', completed: false },
  { id: '6', name: 'Desenvolvimento Mobile - React - Native', dueDate: '2024-07-03', completed: false },
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const TaskScreen: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleCompletion = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskName}>{item.name}</Text>
      <Text style={styles.taskDueDate}>Data de Entrega: {formatDate(item.dueDate)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={item.completed ? styles.completedButton : styles.pendingButton}
          onPress={() => toggleCompletion(item.id)}
        >
          <Text style={styles.buttonText}>{item.completed ? 'Concluído' : 'Pendente'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
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
