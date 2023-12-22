/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TransactionModal from './elements/TransactionModal';
import TransactionSelect from './elements/TransactionSelect';
import images from '../assets/image';
const Transaction = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalCreateVisible, setModalCreateVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleModalCreate = () => {
    setModalCreateVisible(!isModalCreateVisible);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = text => {
    const newInput = text.replace(/[^0-9]/g, '');
    setInputValue(newInput);
  };
  const handleButtonPress = text => {
    // Lakukan sesuatu ketika tombol ditekan
    console.log('Tombol ditekan!');
  };
  const handleNumberPress = number => {
    setInputValue(prevValue => prevValue + number);
  };

  const handleClearPress = () => {
    setInputValue('');
  };
  const formatNumber = number => {
    return Number(number).toLocaleString('en-US');
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>Choose Category</Text>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.tombol}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'gray', shadowOpacity: 0.5}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <TransactionModal onClose={toggleModal} />
        </Modal>
      </View>
      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity onPress={toggleModalCreate} style={styles.select}>
          <View style={{flex: 1}}>
            <Text style={{color: '#8989ff', fontSize: 18}}>
              {selectedCategory || 'Category'}
            </Text>
          </View>
          <Image source={images.select} style={{height: 10, width: 10}} />
        </TouchableOpacity>
        <View style={{backgroundColor: 'grey', shadowOpacity: 0.5}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalCreateVisible}
            onRequestClose={() => {
              setModalCreateVisible(false);
            }}>
            <TransactionSelect
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onClose={toggleModalCreate}
            />
          </Modal>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>Enter Amount</Text>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={'Rp' + formatNumber(inputValue)}
          keyboardType="numeric"
          onChangeText={handleInputChange}
          editable={false}
        />
        <View style={styles.buttonContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
            <TouchableOpacity
              key={number}
              style={styles.numberButton}
              onPress={() => handleNumberPress(String(number))}>
              <Text style={styles.numberButtonText}>{number}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handleNumberPress('000')}>
            <Text style={styles.numberButtonText}>000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearPress}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonSet,
            {backgroundColor: !inputValue ? 'gray' : 'blue'},
          ]}
          onPress={handleButtonPress}
          disabled={!inputValue}>
          <Text style={{color: 'white', fontSize: 18}}>Set Amount</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  itemTextContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  tombol: {
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 15,
    marginTop: 13,
    marginRight: 20,
    backgroundColor: 'blue',
  },
  itemName: {
    color: 'black',
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: 200,
    marginLeft: 25,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 5,
  },
  numberButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 5,
  },
  numberButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcoral',
    margin: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonSet: {
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
  },
  select: {
    paddingHorizontal: 20,
    backgroundColor: '#e2e2e2',
    borderRadius: 5,
    height: 70,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default Transaction;
