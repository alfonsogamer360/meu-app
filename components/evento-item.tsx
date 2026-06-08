import { Calendar, MapPin, Ticket } from 'lucide-react-native';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function EventoItem() {
  const evento = {
    titulo: 'Pesca da Tainha',
    imagem:
      'https://oatlantico.com.br/wp-content/uploads/2023/08/Com-257-mil-tainhas-capturadas-em-Florianopolis-veja-praias-com-maiores-lancos-na-temporada-e1690896407302.jpg',
    descricao: 'A pesca da tainha será intensa no Pântano do Sul',
    local: 'Pântano do Sul',
    data: '30/Maio',
    valor: 100.0,
  };

  const [quantidade, setQuantidade] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.evento}>
        <Image style={styles.imagem} source={{ uri: evento.imagem }} />
        <Text style={styles.titulo}>{evento.titulo}</Text>
        <Text style={styles.descricao}>{evento.descricao}</Text>
        <View style={styles.icone}>
          <Calendar size={14} color='gray' />
          <Text style={styles.texto}>{evento.data}</Text>
        </View>
        <View style={styles.icone}>
          <MapPin size={14} color='gray'/>
          <Text style={styles.texto}>{evento.local}</Text>
        </View>
        <View style={styles.icone}>
          <Ticket size={14} color='gray'/>
          <Text style={styles.texto}>R$ {evento.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Text>
        </View>
      </View>
      <View style={styles.reserva}>
        <View style={styles.contador}>
          <Button title="+" onPress={() => setQuantidade(quantidade + 1)} />
          <Text style={styles.quantidade}>{quantidade}</Text>
          {/* Validação: Só subtrai se for maior que zero, senão mantém zero */}
          <Button title="-" onPress={() => setQuantidade(quantidade > 0 ? quantidade - 1 : 0)} />
        </View>
        <View>
          <Button
            title="reservar"
            onPress={() => Alert.alert('Reserva efetuada com sucesso')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white', // Corrigido aqui
  },
  evento: {
    flexDirection: 'column',
    marginTop: 20,
  },
  reserva: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
  },
  contador: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  imagem: {
    width: '100%', // Alterado para ocupar a largura total de forma responsiva
    height: 200,
  },
  icone: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 5   
  },
  titulo: {
    fontSize: 28,
  },
  descricao: {
    fontSize: 16,
  },
  texto: {
    fontSize: 12,
  },
  valor: {
    fontSize: 12,
  },
  quantidade: {
    fontSize: 16,
  },
});
