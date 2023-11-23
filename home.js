import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://4.bp.blogspot.com/-VGO5bDcD4vg/W1sNGdjukdI/AAAAAAAAOXc/SQrKAO0SZ_IjSaZoCzgD6qsHVHEJl6M-wCLcBGAs/s1600/687987.jpg'};

const Home = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Chào Mừng Ngày Nhà giáo việt nam 20/11</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 1400,
    height: 500,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
});

export default Home;
