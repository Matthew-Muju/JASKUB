import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components';
import {Cari, Tawar} from '../assets/icon';
import {Gap} from '../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Header title="HOME" options={() => navigation.navigate('Setting')} />
      </View>
      <Gap height={26} />
      <Gap height={16} />
      <View>
        <Text style={styles.homeText}>Pilih Menu Yang Di Inginkan</Text>
      </View>
      <Gap height={50} />
      <View style={styles.homeWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Offer')}
          activeOpacity={0.7}>
          <View>
            <Tawar />
          </View>
        </TouchableOpacity>
        <Gap height={20} />
        <Text style={styles.menuText}>Tawarkan Jasa</Text>
        <Gap height={70} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Use')}
          activeOpacity={0.7}>
          <View>
            <Cari />
          </View>
        </TouchableOpacity>
        <Gap height={20} />
        <Text style={styles.menuText}>Gunakan Jasa</Text>
        <Gap height={20} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeText: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
  },
  homeWrapper: {
    alignItems: 'center',
    paddingTop: 30,
  },
  menuText: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  welcomeWrapper: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    textAlign: 'center',
  },
});
