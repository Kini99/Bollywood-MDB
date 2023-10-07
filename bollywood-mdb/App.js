import { StyleSheet,  View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DrawerComponent from './components/DrawerComponent';

export default function App() {

  return (
    <View style={styles.container}>
     <DrawerComponent />
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
