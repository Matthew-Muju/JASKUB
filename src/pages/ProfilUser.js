import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, TextInput, Gap} from '../components';
import auth, {firebase} from '@react-native-firebase/auth';

const ProfilUser = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <View>
          <Header
            title="PROFILE"
            onBack={() => navigation.goBack()}
            options={() => navigation.navigate('Setting')}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.photoWrapper}>
            <View style={styles.addPhoto}>
              <Text style={styles.addPhotoText}>Your Photo</Text>
            </View>
          </View>
          <Text style={styles.profileText}>Nama : </Text>
          <Gap height={20} />
          <Text style={styles.profileText}>Email : </Text>
          <Gap height={20} />
          <Text style={styles.profileText}>No. Hp : </Text>
          <Gap height={20} />
          <Text style={styles.profileText}>Password : </Text>
          <Gap height={20} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 200,
  },
  profileText: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  addPhoto: {
    height: 100,
    width: 100,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  addPhotoText: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    maxWidth: 48,
    textAlign: 'center',
  },
  photoWrapper: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
});
