import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import images from '../assets/image';
const Report = () => {
  // @ts-ignore
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textUser}>Monthly Report</Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            height: 300,
          }}>
          <Image source={images.grafik} style={{width: 285, height: 280}} />
        </View>
        <Text style={styles.textControlWeekly}> Spending of the month</Text>
        <View style={{ marginHorizontal: 20}}>
          <View style={styles.itemContainer}>
            <Image source={images.signal} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>Food</Text>
              <Text style={styles.itemDescription}>Rp. 50.000</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Image source={images.signal} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>Quota</Text>
              <Text style={styles.itemDescription}>Rp. 50.000</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Image source={images.signal} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>Royalty</Text>
              <Text style={styles.itemDescription}>Rp. 1.550.000</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  title: {
    // backgroundColor:'yellow',
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  textUser: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  textControlWeekly: {
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
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
    color: 'red',
  },
  itemDescription: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',

  },
});

export default Report;
