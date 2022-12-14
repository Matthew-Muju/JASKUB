import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {JW} from '../../assets/icon';
import Modal from 'react-native-modal';
import {Gap, Button} from '../atoms';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useNavigation} from '@react-navigation/native';

const JobCard = ({title, location, value, tipe}) => {
  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [placeLocation, setPlaceLocation] = useState('');

  const navigation = useNavigation();

  showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModal(true)}>
        <View style={styles.container}>
          <JW />
          <View>
            <Text style={styles.item}>{title}</Text>
            <Text style={styles.titleText}>{tipe}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
          <Text style={styles.item}>{location}</Text>
        </View>
      </TouchableOpacity>
      <Modal isVisible={modal} onBackdropPress={() => setModal(false)}>
        <View style={styles.modalBox}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/icon/logojkb.png')}
              style={styles.modalImg}
            />
          </View>
          <Text style={styles.modalText}>Gunakan Jasa</Text>
          <View style={styles.modalContent}>
            <Text style={styles.text}>Tanggal Penggunaan Jasa</Text>
            <SafeAreaView style={styles.safeView}>
              <AntDesign
                name="calendar"
                style={styles.Icons}
                size={28}
                color="#2196F3"
              />

              <TextInput
                value={
                  selectedDate
                    ? selectedDate.toLocaleDateString()
                    : 'No date selected'
                }
                placeholder="Tanggal Penggunaan Jasa"
                style={{flex: 0.9}}
              />

              <TouchableOpacity
                onPress={showDatePicker}
                style={{justifyContent: 'center', flex: 0.2, marginRight: 10}}>
                <Text>Set Date</Text>
                <DateTimePickerModal
                  date={selectedDate}
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </TouchableOpacity>
            </SafeAreaView>
            <Gap height={16} />
            <Text style={styles.text}>Lokasi</Text>
            <SafeAreaView style={styles.safeView}>
              <IonIcons
                name="location"
                style={styles.Icons}
                size={28}
                color="#2196F3"
              />

              <TextInput
                value={placeLocation}
                placeholder="Location"
                style={{flex: 0.9}}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate('Maps')}
                style={{justifyContent: 'center', flex: 0.2, marginRight: 10}}>
                <Text>Set Loc</Text>
              </TouchableOpacity>
            </SafeAreaView>
            <Gap height={20} />
            <Button title="Gunakan" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    borderRadius: 6,
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    elevation: 1,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#8D92A3',
  },
  item: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
  value: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#1ABC9C',
  },
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
  safeView: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 10,
    backgroundColor: '#E8F6FF',
  },
  Icons: {flex: 0.3, marginLeft: 10},
  mapContainer: {
    //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
