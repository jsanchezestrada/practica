import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function Index() {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [tarea, setTarea] = useState("");

  return (
    <ScrollView style={styles.contenedor}>
     <Text style={styles.titulo}>Lista de tareas</Text>
     <Pressable
  style={styles.boton}
  onPress={() => setMostrarInput(true)}
>
  <Text style={styles.textoBoton}>Nueva tarea</Text>
  {mostrarInput && (
  <>
    <TextInput
      style={styles.input}
      placeholder="Escribe una tarea"
      value={tarea}
      onChangeText={setTarea}
    />

   <Pressable
  style={styles.botonGuardar}
  onPress={() => setMostrarInput(false)}
>
  <Text style={styles.textoBoton}>Guardar</Text>
</Pressable>
  </>
)}
</Pressable>
     
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

   boton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBoton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
  borderWidth: 1,
  borderColor: "#999",
  borderRadius: 10,
  padding: 12,
  marginTop: 15,

  botonGuardar: {
  backgroundColor: "green",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 10,
},
},
});