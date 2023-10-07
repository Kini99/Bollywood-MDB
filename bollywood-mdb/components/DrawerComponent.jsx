import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, Animated } from 'react-native';
import DrawerContent from './DrawerContent';
import logo from '../assets/logo.jpeg';
import hamburger from '../assets/hamburger.png';

const screenWidth = Dimensions.get('window').width;

const DrawerComponent = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const slideInRight = new Animated.Value(0);

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  useEffect(() => {
    if (isDrawerVisible) {
      Animated.timing(slideInRight, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideInRight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isDrawerVisible]);

  const transformStyle = {
    transform: [
      {
        translateX: slideInRight.interpolate({
          inputRange: [0, 1],
          outputRange: [screenWidth, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="none"
        transparent={true}
        visible={isDrawerVisible}
        onRequestClose={closeDrawer}
      >
        <Animated.View style={[styles.drawerContainer, transformStyle]}>
          <DrawerContent closeDrawer={closeDrawer} />
        </Animated.View>
      </Modal>

      <TouchableOpacity style={styles.subContainer} onPress={toggleDrawer}>
        <Image style={styles.logo} source={logo} />
        <Image style={styles.hamburger} source={hamburger} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    position: 'relative',
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  hamburger: {
    width: 30,
    height: 30,
  },
  drawerContainer: {
    position: 'absolute',
    height: '100%',
    width: '80%',
    right: 0,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerComponent;
