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
  // const [modalCreateVisibleDropdown, setModalCreateVisibleDropdown] = useState(false);

  const toggleModalCreate = () => {
    setModalCreateVisible(!isModalCreateVisible);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [inputValue, setInputValue] = useState('');
  const [buttonColor, setButtonColor] = useState('gray');
  const handleInputChange = text => {
    setInputValue(text.replace(/[^0-9]/g, ''));
    setButtonColor(!inputValue ? 'gray' : 'blue');
    // eslint-disable-next-line eqeqeq
    // if (
    //   !inputValue ||
    //   inputValue == '' ||
    //   inputValue == 0 ||
    //   inputValue == '0'
    // ) {
    //   setButtonColor('gray');
    // } else {
    //   setButtonColor('blue');
    // }
    // setButtonColor(inputValue == '' || inputValue == 0 ? 'gray' : 'blue');
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
  const data = [
    {
      label: 'Listrik',
      value: 'option1',
      // icon: () => <Image source={images.signal} style={styles.image} />,
      image: images.grafik,
    },
    {
      label: 'Option 2',
      value: 'option2',
      image: require('../assets/image/signal.png'),
    },
    {
      label: 'Option 3',
      value: 'option3',
      image: require('../assets/image/signal.png'),
    },
  ];
  const renderDropdownItem = item => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Image
        source={item.image}
        style={{width: 24, height: 24, marginRight: 10}}
      />
      <Text style={{color: 'red'}}>{item.value}</Text>
      <Text style={{color: 'red'}}>{item.label}</Text>
    </View>
  );
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
      <View style={{backgroundColor: 'grey', shadowOpacity: 0.5}}>
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
        <TouchableOpacity
          onPress={toggleModalCreate}
          style={{
            paddingLeft: 20,
            backgroundColor: '#e2e2e2',
            borderRadius: 5,
            height: 70,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#8989ff', fontSize: 18}}>Category</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: 'grey', shadowOpacity: 0.5}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalCreateVisible}
            onRequestClose={() => {
              setModalCreateVisible(false);
            }}>
            <TransactionSelect onClose={toggleModalCreate} />
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
          style={[styles.buttonSet, {backgroundColor: buttonColor}]}
          onPress={handleButtonPress}
          disabled={!inputValue}>
          <Text style={{color: 'white', fontSize: 18}}>Set Amount</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    color: 'black',
    marginBottom: 5,
    marginHorizontal: 10,
    backgroundColor: '#e2e2e2',
    height: 70,
  },
});
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
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  selectButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  selectButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: 200,
    backgroundColor: 'lightgray',
    borderRadius: 8,
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
});
export default Transaction;
