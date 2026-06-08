import Clima from '@/components/clima';
import EventoItem from '@/components/evento-item';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Clima />
      <EventoItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginRight: 8,
  },
});
