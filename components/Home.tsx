import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = () => {
  const [category, setCategory] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [listTransaction, setListTransaction] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [username, setUsername] = useState('');
  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername) {
          const formattedUsername = capitalizeEveryWord(storedUsername);
          setUsername(formattedUsername);
        }
      } catch (error) {
        console.error('Error getting user data', error);
      }
    };
    // Mengambil data pengguna dari penyimpanan lokal saat komponen dipasang
    getUserData();
  }, []);
  const capitalizeEveryWord = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        const response = await axios.get(
          'https://my-json-server.typicode.com/rezika29-web/apiBudgetApp/budgetcontrol',
        );
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataCategory();
  }, []);
  useEffect(() => {
    const fetchDataTransaction = async () => {
      try {
        const response = await axios.get(
          'https://my-json-server.typicode.com/rezika29-web/apiBudgetApp/category',
        );
        setTransaction(response.data);
        console.log(setTransaction)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataTransaction();
  }, []);
  useEffect(() => {
    const fetchDataListTransaction = async () => {
      try {
        const response = await axios.get(
          'https://my-json-server.typicode.com/rezika29-web/apiBudgetApp/transaction',
        );
        setListTransaction(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataListTransaction();
  }, []);
  const handleTabChange = index => {
    setActiveTabIndex(index);
  };

  const renderContent = () => {
    if (activeTabIndex === 0) {
      return renderList(listTransaction);
    } else {
      // Jika tab aktif adalah 'Semua'
      return renderList(listTransaction);
      // return renderList(activeTabIndex);
    }
  };

  const renderList = list => {
    return (
      <ScrollView style={styles.contentContainer}>
        {list.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemDate}>{item.date}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAmount}>Rp. {item.amount}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };
  // @ts-ignore
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textUser}>Hai, {username}</Text>
          <Text style={styles.textDesc}>
            Control your expance, control your life
          </Text>
        </View>
        <View style={styles.balance}>
          <Text>Monthly Overview</Text>
          <Text style={styles.textBalance1}>Rp. +15.000.000</Text>
        </View>
        <Text style={styles.textControl}>Your Budget Control</Text>
        <View style={{marginBottom: 24}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {category.map((item, index) => (
              <View key={index} style={styles.scroolView}>
                <View style={styles.icon}>
                  <Image
                    // source={require('../assets/image/spash.png')}
                    source={{uri: item.image}}
                    style={styles.imageIcon}
                  />
                </View>
                <View style={styles.textIcon}>
                  <Text style={styles.textBudgetTitle}>{item.name}</Text>
                  <Text style={styles.textBudget}>RP.{item.limit}</Text>
                  <ProgressBar
                    style={styles.progressBar}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.9}
                  />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.textControlWeekly}> Weakly Transaction</Text>
        <View
          style={{
            alignSelf: 'flex-start',
            flex: 1,
          }}>
          <View
            style={{
              height: 50,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContent}>
              <TouchableOpacity
                onPress={() => handleTabChange(0)}
                style={[styles.tab, activeTabIndex === 0 && styles.activeTab]}>
                <Text style={styles.tabText}>All</Text>
              </TouchableOpacity>
              {transaction.map(item => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleTabChange(item.id)}
                  style={[
                    styles.tab,
                    activeTabIndex === item.id && styles.activeTab
                  ]}>
                  <Text style={styles.tabText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{marginHorizontal: 10}}>{renderContent()}</View>
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
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  balance: {
    backgroundColor: 'blue',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    height: 80,
    padding: 15,
  },
  scroolView: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
    height: 90,
    width: 350,
    padding: 10,
    flexDirection: 'row',
  },
  icon: {
    height: 60,
    width: 60,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'column',
  },
  textIcon: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  imageIcon: {
    width: 30,
    height: 30,
  },
  textUser: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  textDesc: {
    fontSize: 15,
    color: 'black',
  },
  textBalance1: {
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'white',
    color: 'white',
  },
  textControl: {
    color: 'black',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 7,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textControlWeekly: {
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBudgetTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textBudget: {
    color: 'black',
  },
  progressBar: {
    width: 220,
    color: 'blue',
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
  },
  tab: {
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    height: 40,
  },
  activeTab: {
    backgroundColor: 'blue',
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
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
  itemDate: {
    textAlign: 'right',
    color: 'black',
    fontSize: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  itemAmount: {
    fontSize: 14,
    color: 'red',
  },
});

export default Home;
