import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const SlideShow = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await axios.get(
          'https://my-json-server.typicode.com/rezika29-web/apiBudgetApp/onboard',
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataFromApi();
  }, []);
  const Navigation = useNavigation();
  const handleNavigationRegister = () => {
    // @ts-ignore //ini perlu agak tidak ada garis merah
    Navigation.navigate('Register');
  };
  return (
    <Swiper>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.cardButton}>
            <TouchableOpacity onPress={handleNavigationRegister}>
              <Text style={styles.tombol}>skip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardImage}>
            <Image
              // source={item.image}
              source={{uri: item.image}}
              style={styles.images}
              resizeMode="contain"
              width={10}
            />
          </View>
          <View style={styles.textcard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        </View>
      ))}
    </Swiper>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  cardButton: {
    height: '15%',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
    padding: '5%',
  },
  cardImage: {
    marginTop: 100,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingLeft:30,
    paddingRight: 30
  },
  images: {
    height: 250,
    width: '100%',
  },
  textcard: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#dfdfdf',
    marginBottom: 10,
    marginTop: 20,
    flex: 1,
    height: '45%',
    width: '100%',
    padding: '5%',
  },
  title: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    color: 'black',
    fontSize: 15,
  },
  tombol: {
    marginTop: 2,
    color: 'black',
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 17,
  },
});
export default SlideShow;
