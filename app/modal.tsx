import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ModalScreen() {
  const router = useRouter();

  // Estados para gerenciar as entradas do formulário
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [valor, setValor] = useState('');

  // Função ao clicar em confirmar
  const handleConfirmar = () => {
    if (!titulo || !descricao || !local || !data || !valor) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    Alert.alert('Sucesso', 'Evento cadastrado com sucesso!');
    router.back();
  };

  const handleCancelar = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Modal</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o título do evento"
          value={titulo}
          onChangeText={setTitulo}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Imagem (URL)</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira a URL da imagem"
          value={imagem}
          onChangeText={setImagem}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Local</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o local"
          value={local}
          onChangeText={setLocal}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a data"
          value={data}
          onChangeText={setData}
        />
      </View>

      {/* Campo: Valor */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor"
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />
      </View>

      {/* Bloco de Botões de Ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.btn, styles.btnCancelar]} onPress={handleCancelar}>
          <Text style={styles.btnText}>cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.btnConfirmar]} onPress={handleConfirmar}>
          <Text style={styles.btnText}>confirmar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    gap: 15,
  },
  btn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
  },
  btnCancelar: {
    backgroundColor: '#fff',
    borderColor: '#777',
  },
  btnConfirmar: {
    backgroundColor: '#fff',
    borderColor: '#333',
  },
  btnText: {
    fontSize: 14,
    color: '#333',
  },
});
