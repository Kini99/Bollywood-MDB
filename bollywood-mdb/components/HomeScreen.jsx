import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const carouselData = [
  { title: 'War 2: Hritik Roshan to Start Shooting for YRF Actioner by End of 2023 - Reports', imageUrl: "https://assets.gqindia.com/photos/5fdc6eb81c519f6c10ba2d2f/16:9/w_1920,c_limit/Hrithik-Roshan%20(2).jpg" },
  { title: 'War 2: Hritik Roshan to Start Shooting for YRF Actioner by End of 2023 - Reports', imageUrl: "https://img.mensxp.com/media/content/2021/Jan/Hrithik-Roshan-Is-A-Grooming-God1400_5ffaddc80014f.jpeg" },
  { title: 'War 2: Hritik Roshan to Start Shooting for YRF Actioner by End of 2023 - Reports', imageUrl: "https://www.exchange4media.com/news-photo/101932-HrithikRoshanmain.jpg" },
  { title: 'War 2: Hritik Roshan to Start Shooting for YRF Actioner by End of 2023 - Reports', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hrithik_at_Rado_launch.jpg/220px-Hrithik_at_Rado_launch.jpg" }
];

const HomeScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity style={styles.tagContainer}>
            <Text style={styles.tags}>Trending</Text>
            <View>
            <Text style={styles.readMore}>read more</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    left:0,
    position:"relative",
  },
  image: {
    width: "100%",
    height: '100%',
    position:"absolute" 
  },
  overlay: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  tagContainer:{
    display: "flex", 
    flexDirection:"row", 
    alignItems:"center", 
    justifyContent:"space-between", 
    width:"100%" ,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  tags: {
    marginTop: 10,
    color:"red"
  },
  readMore: {
    marginTop: 10,
  },
});

export default HomeScreen;