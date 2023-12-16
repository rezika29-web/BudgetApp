import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import images from '../assets/image';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
// const data = [
//   {
//     image: images.onboard1,
//     title: 'Manage Your Budgeting',
//     desc: 'Easy manage your income and expense into category.',
//   },
//   {
//     image: images.onboard3,
//     title: 'Track Your Expense',
//     desc: 'Easy tracking and find your most spending at.',
//   },
//   {
//     image: images.onboard2,
//     title: 'Set Your Goal',
//     desc: 'You can set goals for your income and expense.',
//   },
// ];

const SlideShow = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchDataFromApi();
  }, []);
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
              {/* <TouchableOpacity> */}
              <Text style={styles.tombol}>skip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardImage}>
            <Image
              // source={item.image}
              source={{uri: item.image}}
              style={styles.images}
              // // eslint-disable-next-line react-native/no-inline-styles
              // style={{
              //   flex: 1,
              //   // width: 230,
              //   // height: 200,
              //   // marginTop: 200,
              // }}
              resizeMode="contain"
              width={10}
            />
          </View>
          <View style={styles.textcard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            {/* <Text style={styles.desc}>{item.image}</Text> */}
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
    // backgroundColor: 'cyan',
    paddingLeft:30,
    paddingRight: 30
  },
  images: {
    height: 250,
    width: '100%',
    // backgroundColor: 'black',
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
