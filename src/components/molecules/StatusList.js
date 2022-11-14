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
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Modal from 'react-native-modal';
import {Gap, Button} from '../atoms';
import {useNavigation} from '@react-navigation/native';

const StatusList = ({title, date, status}) => {
  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [eStatus, seteStatus] = useState('Digunakan');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

  hideStatus = () => {
    setModalStatus(false);
  };

  handleStatus = () => {
    seteStatus('Selesai');
    hideStatus();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setModalStatus(true)}>
            <Text style={styles.statusText}>{(status = eStatus)}</Text>
          </TouchableOpacity>
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
          <Text style={styles.modalText}>Re-Schedule</Text>
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
            <Gap height={20} />
            <Button title="Perbaharui Jadwal" onPress={() => setModal(false)} />
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={modalStatus}
        onBackdropPress={() => setModalStatus(false)}>
        <View style={styles.modalBox}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/icon/logojkb.png')}
              style={styles.modalImg}
            />
          </View>
          <Text style={styles.modalText}>Gunakan Jasa</Text>
          <View style={styles.modalContent}>
            <Text style={styles.textConf}>
              Apakah telah menyelesaikan Jasa?
            </Text>
            <Gap height={20} />
            <Button title="Selesai" onPress={handleStatus} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default StatusList;

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
    fontSize: 18,
    color: 'black',
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
  statusText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#00952A',
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
  textConf: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    marginBottom: 6,
    color: 'black',
    textAlign: 'center',
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
});
