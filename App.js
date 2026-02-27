import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.linhaDeBotoes}>
        <TouchableOpacity style={styles.botaoMais} onPress={incrementar}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMenos} onPress={decrementar}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff8ebb' },
  titulo: { fontSize: 20, color: '#fff' },
  numero: { fontSize: 80, fontWeight: 'bold', color: '#fff' },
  linhaDeBotoes: { flexDirection: 'row', marginTop: 20 },
  botaoMais: { backgroundColor: '#c01f8a', marginRight: 10, padding: 10, borderRadius: 5 },
  botaoMenos: { backgroundColor: '#7b0ce4', padding: 10, borderRadius: 5 }
});