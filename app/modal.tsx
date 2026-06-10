import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ModalScreen() {
  const router = useRouter();

  // Estados para gerenciar as entradas do formulário
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');

  const validarTitulo = () => titulo.trim().length >= 3 && titulo.trim().length <= 256;
  const validarDescricao = () => descricao.trim().length >= 3 && descricao.trim().length <= 256;
  const validarLocal = () => local.trim().length >= 3 && local.trim().length <= 256;
  const validarData = () => {
    const dataInformada = new Date(data);
    const agora = new Date();
    const umAnoDepois = new Date(agora);
    umAnoDepois.setFullYear(agora.getFullYear() + 1);

    return (
      !Number.isNaN(dataInformada.getTime()) &&
      dataInformada > agora &&
      dataInformada < umAnoDepois
    );
  };
  const validarValor = () => {
    const valorNumero = Number(valor.replace(',', '.'));
    return !Number.isNaN(valorNumero) && valorNumero > 1 && valorNumero < 1000;
  };

  const onSubmit = () => {
    if (!validarTitulo()) {
      Alert.alert('Atenção', 'O título precisa ter entre 3 e 256 caracteres.');
      return;
    }

    if (!validarDescricao()) {
      Alert.alert('Atenção', 'A descrição precisa ter entre 3 e 256 caracteres.');
      return;
    }

    if (!validarLocal()) {
      Alert.alert('Atenção', 'O local precisa ter entre 3 e 256 caracteres.');
      return;
    }

    if (!validarData()) {
      Alert.alert('Atenção', 'A data precisa ser maior que hoje e menor que 1 ano. Use o formato YYYY-MM-DD.');
      return;
    }

    if (!validarValor()) {
      Alert.alert('Atenção', 'O valor precisa ser maior que R$1,00 e menor que R$1.000,00.');
      return;
    }

    Alert.alert('Sucesso', 'Evento cadastrado com sucesso!');
    router.back();
  };

  const onCancel = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Incluir evento</Text>

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
          style={[styles.input, styles.textArea]}
          placeholder="Informe a descrição"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={3}
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
          placeholder="Informe a data (YYYY-MM-DD)"
          value={data}
          onChangeText={setData}
        />
      </View>

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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.btn, styles.btnCancelar]} onPress={onCancel}>
          <Text style={styles.btnText}>cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.btnConfirmar]} onPress={onSubmit}>
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
    color: '#333',
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
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
    backgroundColor: '#fff',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    gap: 15,
  },
  btn: {
    flex: 1,
    paddingVertical: 12,
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
    textTransform: 'uppercase',
  },
});
