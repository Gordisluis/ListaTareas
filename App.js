import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    
    setTaskItems([...taskItems, task])
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>La tarea del dia.</Text>
      {/* las tareas de hoy */}
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {/* aqui iran todas las tareas */}
          { 
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task  text={item} />
                </TouchableOpacity>
              )
                
              
              

            })
          }

        </View>

        {/* escribiremos las tareas seccion */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={"Escribe una Tarea"} value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#EBEAED",
  },
  tasksWrapper: {
    paddingTop: 120,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    paddingTop: 60,
    marginTop: 30,
    paddingLeft: 30,
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 1,
  },
  writeTaskWrapper: {
    position: "absolute",
    paddingVertical: 25,
    paddingLeft: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderwidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderwidth: 1,
  },
  addText: {},
});
