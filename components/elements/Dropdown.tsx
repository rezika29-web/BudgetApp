import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

const Dropdown = ({items, onSelect, selectedValue, placeholder}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{backgroundColor:'yellow'}}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{color:'black'}}>{selectedValue || placeholder}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View>
            <Picker
              selectedValue={selectedValue}
              onValueChange={itemValue => {
                onSelect(itemValue);
                setModalVisible(false);
              }}
              itemStyle={{fontSize: 16, color: 'blue', textAlign: 'center'}}
              style={{
                backgroundColor: 'lightgray',
                width: 200,
                borderRadius: 8,
                color: 'black'
              }}>
              <Picker.Item label={placeholder} value={null} />
              {items.map(item => (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;
