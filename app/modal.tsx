import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { criarEvento } from '../services/api-service';

dayjs.extend(customParseFormat);

export default function ModalScreen() {
  const router = useRouter();

  const [titulo, setTitulo] = useState('');
  const [tituloErro, setTituloErro] = useState('');

  const [descricao, setDescricao] = useState('');
  const [descricaoErro, setDescricaoErro] = useState('');

  const [local, setLocal] = useState('');
  const [localErro, setLocalErro] = useState('');

  const [data, setData] = useState('');
  const [dataErro, setDataErro] = useState('');

  const [valor, setValor] = useState('');
  const [valorErro, setValorErro] = useState('');

  const limparErros = () => {
    setTituloErro('');
    setDescricaoErro('');
    setLocalErro('');
    setDataErro('');
    setValorErro('');
  };

  const isFormularioComErro = () => {
    let isCampoInvalido = false;

    if (titulo.trim().length < 3 || titulo.trim().length > 256) {
      setTituloErro('Título deve ter entre 3 e 256 caracteres');
      isCampoInvalido = true;
    }

    if (descricao.trim().length < 3 || descricao.trim().length > 256) {
      setDescricaoErro('Descrição deve ter entre 3 e 256 caracteres');
      isCampoInvalido = true;
    }

    if (local.trim().length < 3 || local.trim().length > 256) {
      setLocalErro('Local deve ter entre 3 e 256 caracteres');
      isCampoInvalido = true;
    }

    const dataInformada = dayjs(data, ['DD/MM/YYYY', 'YYYY-MM-DD'], true);
    const dataAtual = dayjs();
    const dataMaxima = dayjs().add(1, 'year');

    if (!dataInformada.isValid() || dataInformada.isBefore(dataAtual, 'day') || dataInformada.isAfter(dataMaxima, 'day')) {
      setDataErro(`Data deve ser maior que ${dataAtual.format('DD/MM/YYYY')} e menor que ${dataMaxima.format('DD/MM/YYYY')}`);
      isCampoInvalido = true;
    }

    const valorNumero = Number(valor.replace(',', '.'));
    if (Number.isNaN(valorNumero) || valorNumero < 1 || valorNumero > 1000) {
      setValorErro('Valor deve ter entre R$1 e R$1000');
      isCampoInvalido = true;
    }

    return isCampoInvalido;
  };

  const onSubmit = async () => {
    limparErros();

    if (!isFormularioComErro()) {
      try {
        const evento = {
          titulo,
          descricao,
          local,
          data,
          valor: Number(valor.replace(',', '.')),
        };

        await criarEvento(evento);

        Alert.alert('Sucesso', 'Evento cadastrado com sucesso!');
        router.back();
      } catch (error) {
        console.error('Erro ao criar evento:', error);
        Alert.alert('Erro', 'Não foi possível cadastrar o evento. Tente novamente.');
      }
    }
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
          onChangeText={(texto) => {
            setTitulo(texto);
            if (tituloErro) setTituloErro('');
          }}
        />
        {tituloErro ? <Text style={styles.errorText}>{tituloErro}</Text> : null}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Informe a descrição"
          value={descricao}
          onChangeText={(texto) => {
            setDescricao(texto);
            if (descricaoErro) setDescricaoErro('');
          }}
          multiline
          numberOfLines={3}
        />
        {descricaoErro ? <Text style={styles.errorText}>{descricaoErro}</Text> : null}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Local</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o local"
          value={local}
          onChangeText={(texto) => {
            setLocal(texto);
            if (localErro) setLocalErro('');
          }}
        />
        {localErro ? <Text style={styles.errorText}>{localErro}</Text> : null}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a data (DD/MM/YYYY)"
          value={data}
          onChangeText={(texto) => {
            setData(texto);
            if (dataErro) setDataErro('');
          }}
        />
        {dataErro ? <Text style={styles.errorText}>{dataErro}</Text> : null}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor"
          keyboardType="numeric"
          value={valor}
          onChangeText={(texto) => {
            setValor(texto);
            if (valorErro) setValorErro('');
          }}
        />
        {valorErro ? <Text style={styles.errorText}>{valorErro}</Text> : null}
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
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
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
