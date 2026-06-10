import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function Clima() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-27.597&longitude=-48.5494&current_weather=true'
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <ActivityIndicator />;
  if (!data || !data.current_weather) return <Text>Erro ao carregar o clima</Text>;

  const weatherCode = data.current_weather.weathercode;
  const temperature = data.current_weather.temperature;

  let climaEstado = 'Clima desconhecido';
  let imageUri = 'https://thumbs.dreamstime.com/b/c%C3%A9u-claro-sem-nuvens-claras-azul-acima-do-horizonte-as-para-o-fundo-145319735.jpg';

  switch (weatherCode) {
    case 0:
      climaEstado = 'Céu claro ☀️';
      imageUri = 'https://thumbs.dreamstime.com/b/c%C3%A9u-claro-sem-nuvens-claras-azul-acima-do-horizonte-as-para-o-fundo-145319735.jpg';
      break;
    case 1:
    case 2:
      climaEstado = 'Poucas nuvens 🌤️';
      imageUri = 'https://thumbs.dreamstime.com/b/poucas-nuvens-em-um-c%C3%A9u-azul-9929460.jpg';
      break;
    case 3:
      climaEstado = 'Nublado ☁️';
      imageUri = 'https://upload.wikimedia.org/wikipedia/commons/5/50/Cielo_Nublado.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original';
      break;
    case 45:
    case 48:
      climaEstado = 'Neblina 🌫️';
      imageUri = 'https://images.unsplash.com/photo-1511745307614-4b6d1f2a9d18?auto=format&fit=crop&w=800&q=80';
      break;
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      climaEstado = 'Chuva ☔';
      imageUri = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80';
      break;
    case 56:
    case 57:
    case 66:
    case 67:
      climaEstado = 'Chuva congelante ❄️';
      imageUri = 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80';
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      climaEstado = 'Neve ❄️';
      imageUri = 'https://images.unsplash.com/photo-1516557070065-2a3293d8e09e?auto=format&fit=crop&w=800&q=80';
      break;
    case 95:
    case 96:
    case 99:
      climaEstado = 'Tempestade ⛈️';
      imageUri = 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80';
      break;
    default:
      climaEstado = 'Clima desconhecido';
      imageUri = 'https://picsum.photos/600/300';
  }

  const imageSource = { uri: imageUri || 'https://picsum.photos/600/300' };

  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        style={styles.weatherImage}
        resizeMode="cover"
        onError={(error) => {
          console.warn('Erro ao carregar imagem de clima:', error.nativeEvent.error);
        }}
      />
      <Text style={styles.climaEstado}>{climaEstado}</Text>
      <Text style={styles.temperatura}>
        {Math.ceil(temperature)}°
      </Text>
      <Text>Florianópolis, SC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatura: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'pink',
  },
  climaEstado: {
    fontSize: 20,
    color: 'pink',
  },
  weatherImage: {
    width: '100%',
    maxWidth: 395,
    height: 180,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    marginBottom: 12,
  },
});