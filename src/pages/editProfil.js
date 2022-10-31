import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { Button, Header, TextInput, Gap } from '../components'
import {launchImageLibrary} from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';

const EditProfil = ({navigation}) => {

  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);

  const openGalery = async () => {
    const result = await launchImageLibrary({maxWidth: 200, maxHeight: 200, includeBase64: true,});
    if (result.didCancel){
      setHasPhoto(false);
      showMessage({
        message: "Upload Photo Has Been Canceled",
        type: 'default',
        backgroundColor: '#D9435E',
        color: 'white',
      });
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
    }
    
  }

  return (
    <View >
      <View>
        <Header title='EDIT PROFILE' onBack={() => navigation.goBack()}/>
      </View>
      <View style={styles.container}>
      <View style={styles.photoWrapper}>
        <TouchableOpacity onPress={openGalery} activeOpacity={0.6}>
          {!hasPhoto && (
            <View style={styles.addPhoto}>
            <Text style={styles.addPhotoText}>Add Photo</Text>
          </View>
          )}
          {hasPhoto && (
            <Image source={{uri: photo}} style={styles.avatar} />
          )}
        </TouchableOpacity>
      </View>
        <TextInput title="Username" placeholder="Masukan Username Anda" />
        <Gap height={20} />
        <TextInput title="Email" placeholder="Masukan Email Anda"/>
        <Gap height={20} />
        <TextInput title="No. HP" placeholder="Masukan Nomor HP Anda"/>
        <Gap height={30} />
        <Button title='Save' /> 
      </View>
    </View>
  )
}

export default EditProfil

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 200,
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
})