import Clima from "@/components/clima";
import EventoItem from "@/components/evento-item";
import { useRouter } from "expo-router";
import { Plus } from "lucide-react-native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const onPress = () => {
    router.navigate("/modal");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Clima />
      <Text style={styles.titulo}>Próximos eventos</Text>
      <EventoItem />

      {/* Botão Flutuante (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Plus size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// 🔑 A falta deste bloco causava o erro "styles is not defined"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#007AFF", // Cor azul padrão para o botão
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 99, // Garante que o botão fique por cima de tudo
  },
});
