import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetar = () => setContador(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.linhaDeBotoes}>
        <TouchableOpacity style={styles.botaoMais} onPress={incrementar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMenos} onPress={decrementar}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoReset} onPress={resetar}>
        <Text style={styles.textoBotao}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff8ebb',
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numero: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
  },
  linhaDeBotoes: {
    flexDirection: 'row',
    marginTop: 20
  },
  botaoMais: {
    backgroundColor: '#c01f8a',
    marginRight: 10,
    padding: 20,
    borderRadius: 50,
  },
  botaoMenos: {
    backgroundColor: '#7b0ce4',
    padding: 20,
    borderRadius: 50,
  },
  botaoReset: {
    marginTop: 20,
    backgroundColor: '#f8449e',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});