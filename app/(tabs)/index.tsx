import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function Index() {

  const [mostrarInput, setMostrarInput] = useState(false);
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState<string[]>([]);
  const guardarTarea = () => {
  if (tarea.trim() === "") {
    return;
  }

  setTareas([...tareas, tarea]);
  setTarea("");
  setMostrarInput(false);
};

  return (
    <ScrollView style={styles.contenedor}>
     <Text style={styles.titulo}>Lista de tareas</Text>
   <Pressable
  style={styles.boton}
  onPress={() => setMostrarInput(true)}
>
  <Text style={styles.textoBoton}>Nueva tarea</Text>
</Pressable>

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
      onPress={guardarTarea}
    >
      <Text style={styles.textoBoton}>Guardar</Text>
    </Pressable>
  </>
)}
<Text style={styles.subtitulo}>Mis tareas</Text>

{tareas.map((tarea, index) => (
  <Text style={styles.tarea} key={index}>
    {index + 1}. {tarea}
  </Text>
))}
     
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

  subtitulo: {
  fontSize: 22,
  fontWeight: "bold",
  marginTop: 25,
  marginBottom: 10,
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
},
  botonGuardar: {
  backgroundColor: "green",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 10,
},

tarea: {
  fontSize: 18,
  padding: 12,
  marginBottom: 8,
  borderWidth: 1,
  borderRadius: 8,
},

});