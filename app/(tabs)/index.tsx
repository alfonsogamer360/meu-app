import Clima from "@/components/clima";
import EventoItem from "@/components/evento-item";
import { useRouter } from "expo-router";
import { Plus } from "lucide-react-native";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const onPress = () => {
    router.navigate("/modal");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={styles.fab}
          activeOpacity={0.7}
          onPress={onPress}
        >
          <Plus size={24} color="white" />
        </TouchableOpacity>

        <Clima />
        <Text style={styles.titulo}>Próximos eventos</Text>
        <EventoItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 16,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 80,
    backgroundColor: "#fff",
  },
  titulo: {
    marginTop: 40,
    marginBottom: 8,
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 4,
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#007AFF",
    borderRadius: 28,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
