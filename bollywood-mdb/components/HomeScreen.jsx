import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const carouselData = [
  { title: 'War 2: Hritik Roshan to Start Shooting for YRF Actioner by End of 2023 - Reports', imageUrl: "https://assets.gqindia.com/photos/5fdc6eb81c519f6c10ba2d2f/16:9/w_1920,c_limit/Hrithik-Roshan%20(2).jpg" },
  { title: 'War 2: Hritik Roshan to Start Shooting for YRF Actioner by End of 2023 - Reports', imageUrl: "https://img.mensxp.com/media/content/2021/Jan/Hrithik-Roshan-Is-A-Grooming-God1400_5ffaddc80014f.jpeg" },
  { title: 'War 2: Hritik Roshan to Start Shooting for YRF Actioner by End of 2023 - Reports', imageUrl: "https://www.exchange4media.com/news-photo/101932-HrithikRoshanmain.jpg" },
  { title: 'War 2: Hritik Roshan to Start Shooting for YRF Actioner by End of 2023 - Reports', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hrithik_at_Rado_launch.jpg/220px-Hrithik_at_Rado_launch.jpg" }
];

const HomeScreen = ({ isModalVisible }) => {

  const [activeSlide, setActiveSlide] = useState(0);

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
      {isModalVisible ?  <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={280}
        itemWidth={280}
        onSnapToItem={(index) => setActiveSlide(index)}
      /> :  <Carousel
      data={carouselData}
      renderItem={renderItem}
      sliderWidth={410}
      itemWidth={410}
      onSnapToItem={(index) => setActiveSlide(index)}
    />}
       <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    left: 0,
    position: "relative",
  },
  image: {
    width: "100%",
    height: '100%',
    position: "absolute"
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color:"#fff",
    fontWeight:"500"
  },
  tags: {
    marginTop: 10,
    color: "red",
    fontSize: 16,
  },
  readMore: {
    marginTop: 10,
    fontSize: 16,
    color:"#fff",
  },
  paginationContainer: {
    marginTop: -15,
    marginBottom:-15,
    width:50
  },
  paginationDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});

export default HomeScreen;