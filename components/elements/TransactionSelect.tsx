import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../../assets/image';
import axios from 'axios';

const TransactionSelect = ({onClose,selectedCategory, setSelectedCategory}) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
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
    fetchDataCategory();
  }, []);
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
          <TouchableOpacity
            onPress={() =>{ 
              setSelectedCategory(item.name);
              onClose();
            }}
            key={index}>
            <View style={styles.itemContainer}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>
                  {item.name}
                </Text>
              </View>
              {selectedCategory===item.name && (
                <Image source={images.check} style={styles.itemIcon} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  itemIcon: {
    width: 30,
    height: 30,
  },
});
export default TransactionSelect;
