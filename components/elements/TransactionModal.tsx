import React, {useState} from 'react';
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

const TransactionModal = ({onClose}) => {
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
  const [judul, setJudul] = useState('');
  const [incomeChecked, setincomeChecked] = useState(false);
  const [expanseChecked, setexpanseChecked] = useState(false);
  const [AmountValue, setAmountValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [imageSource, setImageSource] = useState(null);

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
      <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10, width:'90%'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={selectImage} style={styles.imageContainer}>
            {imageSource ? (
              <Image source={{uri: imageSource}} style={styles.image} />
            ) : (
              <Text style={styles.placeholderText}>Emoji</Text>
            )}
          </TouchableOpacity>

          {/* Input Judul */}
          <TextInput
            style={styles.input}
            placeholder="Type Name..."
            placeholderTextColor={'grey'}
            value={judul}
            onChangeText={text => setJudul(text)}
          />
        </View>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Type
        </Text>

        {/* Check Box Jenis Kelamin */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            checkedIcon={<Image source={images.check} style={{ height: 20, width: 20 }} />}
            uncheckedIcon={<Image source={images.uncheck} style={{ height: 20, width: 20 }} />}
            title="Income"
            checked={incomeChecked}
            onPress={() => {
              setincomeChecked(!incomeChecked);
              setexpanseChecked(false);
            }}
            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
          />
          <CheckBox
            checkedIcon={<Image source={images.check} style={{ height: 20, width: 20 }} />}
            uncheckedIcon={<Image source={images.uncheck} style={{ height: 20, width: 20 }} />}
            title="Expanse"
            checked={expanseChecked}
            onPress={() => {
              setexpanseChecked(!expanseChecked);
              setincomeChecked(false);
            }}
            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
          />
        </View>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Limit{' '}
          <Text style={{fontSize: 15, fontWeight: '500'}}>(optional)</Text>
        </Text>

        {/* Input Alamat */}
        <TextInput
          style={styles.inputAmount}
          value={'Rp.' + formatNumber(AmountValue)}
          onChangeText={text => setAmountValue(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={onClose}
          style={{
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 5,
            height: 50,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontWeight:'bold'}}>Create Category</Text>
        </TouchableOpacity>
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
    marginRight: 10
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
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    marginVertical: 8,
    fontSize: 24,
    fontWeight: 'bold',
    width: '70%'
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
});
export default TransactionModal;
