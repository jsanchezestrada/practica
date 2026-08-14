import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

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
const eliminarTarea = (index: number) => {
  const confirmar = window.confirm(
    "¿Está seguro que desea eliminar la tarea?"
  );

  if (confirmar) {
    const nuevasTareas = tareas.filter(
      (_, i) => i !== index
    );

    setTareas(nuevasTareas);
  }
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
  <View style={styles.tarea} key={index}>
    <Text style={styles.textoTarea}>
      {index + 1}. {tarea}
    </Text>

    <Pressable
      style={styles.botonEliminar}
      onPress={() => {
  console.log("Botón presionado", index);
  eliminarTarea(index);
}}
    >
      <Text style={styles.textoEliminar}>
        Eliminar
      </Text>
    </Pressable>
  </View>
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
    backgroundColor: "#f8b5e7",
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
  backgroundColor: "pink",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 10,
},

tarea: {
  padding: 12,
  marginBottom: 8,
  borderWidth: 1,
  borderRadius: 8,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

textoTarea: {
  fontSize: 18,
},

botonEliminar: {
  backgroundColor: "red",
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 8,
},

textoEliminar: {
  color: "white",
  fontWeight: "bold",
},

});