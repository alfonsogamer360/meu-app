import { Calendar, MapPin, Share, Ticket } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function EventoItem() {
  const evento = {
    titulo: "Pesca da Tainha",
    imagem: "https://static.ndmais.com.br/2023/03/pesca-da-tainha-lagoinha-do-norte-leo-munhoz-8267-scaled.jpg",
    descricao: "A pesca da tainha será intensa no Pântano do Sul",
    local: "Pântano do Sul",
    data: "30/Maio",
    valor: 100
  }

  const [quantidade, setQuantidade] = useState(1);
  
  return (
    <View style={styles.container}>
      <View style={styles.evento}>
        <Image style={styles.imagem} source={{uri: evento.imagem}}/>
        <Text style={styles.titulo}>{evento.titulo}</Text>
        <Text style={styles.descricao}>{evento.descricao}</Text>
        <View style={styles.icone}>
          <Calendar size={20} color='gray'/>
          <Text style={styles.texto}>{evento.data}</Text>
        </View>
        <View style={styles.icone}>
          <MapPin size={20} color='gray'/>
          <Text style={styles.texto}>Quando: {evento.data}</Text>
        </View>
        <View style={styles.icone}>
          <Ticket size={20} color='gray'/>
          <Text style={styles.texto}>Valor: R$ {evento.valor}</Text>
        </View>
        <View style={styles.icone}>
          <Share size={20} color='gray'/>
          <Text style={styles.texto}>Compartilhar</Text>
        </View>
      </View>
      <View style={styles.reserva}>
        <View style={styles.contador}>
          <Button title="+" onPress={() => setQuantidade(quantidade + 1)}/>
          <Text style={styles.quantidade}>{quantidade < 0 ? 0 : quantidade}</Text>
          <Button title="-" onPress={() => setQuantidade(quantidade - 1)}/>
        </View>
        <View style={styles.reservaButton}>
          <Button title="reservar" onPress={() => Alert.alert("Reservar efetuada com sucesso")}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
    icone: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 5,
  },
  evento: {
    flexDirection: 'column',
    marginTop: 20,
  },
  reserva: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
    marginBottom: 32,
    alignItems: 'center',
  },
  contador: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
  },
  titulo: {
    fontSize: 28,
  },
  texto: {
    fontSize: 18,
  },
  valor: {
    fontSize: 18,
  },
  quantidade: {
    fontSize: 16,
  },
  descricao: {
    fontSize: 18,
    marginTop: 8,
  }
});