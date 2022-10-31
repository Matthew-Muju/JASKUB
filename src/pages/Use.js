import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Header, Gap, Button} from '../components';
import JobCard from '../components/molecules/JobCard';
import Modal from 'react-native-modal';

const Use = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');

  return (
    <ScrollView>
      <View>
        <View>
          <Header
            title="USE"
            onBack={() => navigation.goBack()}
            options={() => navigation.navigate('Setting')}
          />
        </View>
        <View>
          <JobCard
            title="Bangun Rumah"
            location="Tomohon"
            value="150.000.000 - 200.000.000"
            tipe="Borongan"
          />
          <JobCard
            title="Renovasi Rumah"
            location="Bitung"
            value="150.000 - 200.000"
            tipe="Harian"
          />
          <JobCard
            title="Perabot Kayu"
            location="Tomohon"
            value="150.000 - 700.000"
            tipe="Satuan"
          />
          <JobCard
            title="Kitchen Set"
            location="Manado"
            value="1.150.000 - 2.000.000"
            tipe="Set"
          />
          <JobCard
            title="Bangun Rumah"
            location="Airmadidi"
            value="100.000 - 150.000"
            tipe="Harian"
          />
          <JobCard
            title="Bangun Rumah"
            location="Tondano"
            value="200.000 - 250.000"
            tipe="Harian"
          />
          <JobCard
            title="Renovasi Rumah"
            location="Manado"
            value="250.000 - 400.000"
            tipe="Harian"
          />
          <JobCard
            title="Kitchen Set"
            location="Manado"
            value="10.000.000 - 20.000.000"
            tipe="Harian"
          />
          <JobCard
            title="Perabot Kayu"
            location="Tomohon"
            value="100.000 - 15.000.000"
            tipe="Harian"
          />
        </View>
        <Modal isVisible={modal} onBackdropPress={() => setModal(false)}>
          <View style={styles.modalBox}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/icon/logojkb.png')}
                style={styles.modalImg}
              />
            </View>
            <Text style={styles.modalText}>Gunakan Jasa</Text>
            <View style={styles.modalContent}>
              <Text style={styles.text}>Date</Text>
              <TextInput
                placeholder="Masukan Tanggal"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={date => setDate({date})}
                value={date}
              />
              <Gap height={16} />
              <Text style={styles.text}>Alamat</Text>
              <TextInput
                placeholder="Masukan Alamat"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={address => setAddress({address})}
                value={address}
              />
              <Gap height={20} />
              <Button title="Gunakan" />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Use;

const styles = StyleSheet.create({
  modalBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 6,
    opacity: 0.9,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
  },
  modalImg: {
    width: 50,
    height: 50,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
    color: 'black',
  },
  modalContent: {
    padding: 20,
  },
});
