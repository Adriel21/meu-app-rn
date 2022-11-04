import { StatusBar } from 'expo-status-bar';
// stylesheet é uma lib do reactnative que funciona como css
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Subset do CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titulo: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
