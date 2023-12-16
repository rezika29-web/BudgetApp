import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import images from '../../assets/image';
import {CheckBox} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const TransactionSelect = ({onClose}) => {
  const food = [
    {
      name: 'Food',
      description: '-50.000',
      date: 'Sat, 08 July 2020',
      image: images.signal,
    },
    {
      name: 'Banana',
      description: '-40.000',
      date: 'Sat, 08 July 2020',
      image: images.signal,
    },
    // Add more fruits with image and description
  ];
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
  //       <Text style={{color:'black'}}>Ini adalah konten modal</Text>
  //       <TouchableOpacity onPress={onClose}>
  //         <Text style={{color:'black'}}>Tutup Modal</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetchDataCategory();
  }, []);
  const fetchDataCategory = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/rezika29-web/apiBudgetApp/category',
      );
      setCategory(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const selectImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      if (image.path) {
        setImageSource(image.path);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };
  const formatNumber = number => {
    return Number(number).toLocaleString('en-US');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.8,
      }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width: '90%',
          }}>
          {category.map((item, index) => (
          <TouchableOpacity onPress={onClose} key={index} >
            <View style={styles.itemContainer}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
      ))}
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 70,
    marginBottom: 16,
    backgroundColor: '#a6a6a6',
    height: 70,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  placeholderText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    marginVertical: 8,
    fontSize: 24,
    fontWeight: 'bold',
    width: '70%',
  },
  inputAmount: {
    height: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    marginLeft: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#cfcfcf',
    borderRadius: 10,
    height: 70,
    width: '100%',
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
    marginLeft: 10,
  },

  itemTextContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
});
export default TransactionSelect;
