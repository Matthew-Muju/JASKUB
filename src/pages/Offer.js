import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput as TextInputRN,
} from 'react-native';
import React, {useState} from 'react';
import {Header, Gap, TextInput, Button} from '../components';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {AddImage} from '../assets/icon';

const Offer = ({navigation}) => {
  const jenisJasa = ['Bangun Baru', 'Renovasi', 'Tukang Kayu', 'Kitchen Set'];

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
    <View style={styles.container}>
      <View>
        <Header
          title="OFFER"
          onBack={() => navigation.goBack()}
          options={() => navigation.navigate('Setting')}
        />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.offerText}>Jenis Jasa</Text>
        <SelectDropdown
          data={jenisJasa}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={'Pilih Jenis Jasa'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
        <Gap height={20} />
        <View>
          <Text style={styles.text}>Deskripsi</Text>
          <TextInputRN
            style={styles.input}
            placeholder="Tuliskan Deskripsi Jasa"
          />
        </View>
        <Gap height={20} />
        <View>
          <TextInput title="Harga" placeholder="Rp." />
        </View>
        <Gap height={20} />
        <View style={styles.photoWrapper}>
          <Text style={styles.text}>Tambahkan foto</Text>
          <TouchableOpacity onPress={openGalery} activeOpacity={0.6}>
            {!hasPhoto && <AddImage />}
            {hasPhoto && <Image source={{uri: photo}} style={styles.avatar} />}
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <Button title="PUBLISH" />
      </View>
    </View>
  );
};

export default Offer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    paddingTop: 26,
    paddingHorizontal: 24,
  },
  offerText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    width: 340,
  },
  dropdown1BtnTxtStyle: {
    color: '#444',
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left',
    fontSize: 14,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
    color: 'black',
  },
  input: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
    height: 140,
    fontSize: 16,
  },
  photoWrapper: {
    alignItems: 'baseline',
    marginTop: 16,
    marginBottom: 24,
  },
});
