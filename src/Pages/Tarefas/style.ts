import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1768B2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flexGrow: 1,
  },
  taskItem: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDueDate: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});

export default styles;
