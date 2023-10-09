import { StyleSheet, View, Dimensions } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DrawerComponent from './components/DrawerComponent';
import { useState } from 'react';

const screenHeight = Dimensions.get('window').height;

export default function App() {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const containerHeight = isModalVisible ? screenHeight * 0.8 : screenHeight;

  const containerStyle = {
    height: containerHeight,
    borderTopRightRadius: isModalVisible ? 30 : 0,
    borderBottomRightRadius: isModalVisible ? 30 : 0,
    transform: isModalVisible ? [{ translateX: -300 }] : [],
    alignItems: "center",
    borderWidth: isModalVisible ? 2 : 0,
    borderColor: isModalVisible ? "black" : null,
    paddingBottom:isModalVisible ? 20 : null,
    margin:isModalVisible ? 40 : null,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <DrawerComponent toggleModal={toggleModal} />
      <HomeScreen isModalVisible={isModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
