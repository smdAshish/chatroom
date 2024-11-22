import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../Utils/colors';
import {FONTS} from '../../Utils/FontFamily';

const {height, width} = Dimensions.get('window');

type Task = {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
};

const History: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High' | ''>('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [page, setPage] = useState<number>(1);

  const tasksPerPage = 5;

  const saveTask = async () => {
    if (!title || !priority) {
      Alert.alert('Validation Error', 'Task title and priority are required!');
      return;
    }
    const newTask: Task = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      title,
      description,
      priority: priority as 'Low' | 'Medium' | 'High',
      completed: false,
    };

    const updatedTasks = editingTask
      ? tasks.map(task => (task.id === editingTask.id ? newTask : task))
      : [...tasks, newTask];

    setTasks(updatedTasks);
    setTitle('');
    setDescription('');
    setPriority('');
    setEditingTask(null);

    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = async (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleCompletion = async (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (task: Task) => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setEditingTask(task);
  };

  const loadTasks = async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const paginatedTasks = tasks.slice(
    (page - 1) * tasksPerPage,
    page * tasksPerPage,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo Task Management System</Text>
      </View>

      <View style={styles.inputSection}>
        <TextInput
          placeholder="Task Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholderTextColor={COLORS.BLACK}
        />
        <TextInput
          placeholder="Task Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          placeholderTextColor={COLORS.BLACK}
        />
        <Picker
          selectedValue={priority}
          onValueChange={itemValue => setPriority(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Priority" value="" />
          <Picker.Item label="Low" value="Low" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="High" value="High" />
        </Picker>
        <Button
          title={editingTask ? 'Update Task' : 'Save Task'}
          onPress={saveTask}
          color={COLORS.WARNING}
        />
      </View>

      <Text
        style={[
          styles.title,
          {fontFamily: FONTS.RobotoRegular, color: COLORS.BLACK},
        ]}>
        Added tasks
      </Text>

      <View style={styles.taskList}>
        <FlatList
          data={paginatedTasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskTitle}>
                {item.title} ({item.priority})
              </Text>
              <Text style={styles.taskDescription}>{item.description}</Text>
              <Text style={styles.taskStatus}>
                Status: {item.completed ? 'Completed' : 'Pending'}
              </Text>
              <View style={styles.taskActions}>
                <Button
                  title={item.completed ? 'Mark Pending' : 'Mark Complete'}
                  onPress={() => toggleCompletion(item.id)}
                  color={COLORS.SUCCESS}
                />
                <Button
                  title="Edit"
                  onPress={() => editTask(item)}
                  color={COLORS.INFO}
                />
                <Button
                  title="Delete"
                  onPress={() => deleteTask(item.id)}
                  color={COLORS.ERROR}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  inputSection: {
    marginBottom: 20,
  },
  input: {
    height: height * 0.06,
    borderRadius: 20,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: COLORS.BLACK,
  },
  picker: {
    height: height * 0.06,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#28a745',
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: COLORS.LIGHT_GRAY,
    paddingHorizontal: 10,
  },
  taskList: {
    flex: 1,
    marginVertical: 10,
  },
  taskItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  taskTitle: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
    fontSize: 16,
  },
  taskDescription: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 14,
    marginVertical: 5,
  },
  taskStatus: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 12,
  },
  taskActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default History;
