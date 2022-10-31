import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput, Gap, Button} from '../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import auth, {firebase} from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);

  const openGalery = async () => {
    const result = await launchImageLibrary({
      maxWidth: 200,
      maxHeight: 200,
      includeBase64: true,
    });
    if (result.didCancel) {
      setHasPhoto(false);
      showMessage({
        message: 'Upload Photo Has Been Canceled',
        type: 'default',
        backgroundColor: '#D9435E',
        color: 'white',
      });
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
    }
  };

  return (
    <View>
      <Header title="SIGN UP" onBack={() => navigation.goBack()} />
      <Gap height={26} />
      <View style={styles.wel}>
        <Text style={styles.welText}>Ayo Bergabung Bersama Kami</Text>
      </View>
      <View style={styles.photoWrapper}>
        <TouchableOpacity onPress={openGalery} activeOpacity={0.6}>
          {!hasPhoto && (
            <View style={styles.addPhoto}>
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </View>
          )}
          {hasPhoto && <Image source={{uri: photo}} style={styles.avatar} />}
        </TouchableOpacity>
      </View>
      <View style={styles.formWrapper}>
        <TextInput title="Username" placeholder="Masukan Username Anda" />
        <Gap height={16} />
        <TextInput title="Email" placeholder="Masukan Email Anda" />
        <Gap height={16} />
        <TextInput title="Password" placeholder="Masukan Password Anda" />
        <Gap height={40} />
        <Button title="DAFTAR" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  wel: {
    alignItems: 'center',
  },
  welText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
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
  formWrapper: {
    paddingHorizontal: 24,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});
