import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components';
import JobCard from '../components/molecules/JobCard';
import Modal from 'react-native-modal';
import {Gap, Button} from '../components/atoms';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Use = ({navigation}) => {
  const [data, setData] = useState([
    {
      title: 'Bangun Rumah',
      location: 'Tomohon',
      value: 200000000,
      tipe: 'Borongan',
    },
    {
      title: 'Renovasi Rumah',
      location: 'Bitung',
      value: 100000000,
      tipe: 'Harian',
    },
    {
      title: 'Bangun Rumah',
      location: 'Airmadidi',
      value: 400000000,
      tipe: 'Harian',
    },
    {
      title: 'Renovasi Rumah',
      location: 'Manado',
      value: 150000000,
      tipe: 'Borongan',
    },
    {
      title: 'Bangun Rumah',
      location: 'Tondano',
      value: 700000000,
      tipe: 'Borongan',
    },
    {
      title: 'Kitchen Set',
      location: 'Tondano',
      value: 12000000,
      tipe: 'Set',
    },
    {
      title: 'Perabot Kayu',
      location: 'Tomohon',
      value: 800000,
      tipe: 'Satuan',
    },
    {
      title: 'Perabot Kayu',
      location: 'Manado',
      value: 1000000,
      tipe: 'Satuan',
    },
    {
      title: 'Bangun Rumah',
      location: 'Airmadidi',
      value: 500000,
      tipe: 'Satuan',
    },
    {
      title: 'Kitchen Set',
      location: 'Bitung',
      value: 200000000,
      tipe: 'Set',
    },
  ]);

  const [dataTampil, setDataTampil] = useState(data);

  const [filter, setFilter] = useState([
    {namaFilter: 'Rumah', jenis: 'title'},
    {namaFilter: 'Kitchen Set', jenis: 'title'},
    {namaFilter: 'Kayu', jenis: 'title'},
    {namaFilter: 'Manado', jenis: 'location'},
    {namaFilter: 'Tomohon', jenis: 'location'},
    {namaFilter: 'Tondano', jenis: 'location'},
    {namaFilter: 'Bitung', jenis: 'location'},
    {namaFilter: 'Airmadidi', jenis: 'location'},
    {namaFilter: 'Harga <1jt', jenis: 'value'},
    {namaFilter: 'Harga 1jt-10jt', jenis: 'value'},
    {namaFilter: 'Harga >10jt', jenis: 'value'},
    {namaFilter: 'Borongan', jenis: 'tipe'},
    {namaFilter: 'Harian', jenis: 'tipe'},
    {namaFilter: 'Set', jenis: 'tipe'},
    {namaFilter: 'Satuan', jenis: 'tipe'},
  ]);

  function filterData(item) {
    let dataHasilFilter = [...data];

    if (item.jenis == 'title') {
      dataHasilFilter = dataHasilFilter.filter(x =>
        x.title.includes(item.namaFilter),
      );
    }

    if (item.jenis == 'location') {
      dataHasilFilter = dataHasilFilter.filter(x =>
        x.location.includes(item.namaFilter),
      );
    }

    if (item.jenis == 'tipe') {
      dataHasilFilter = dataHasilFilter.filter(x => x.tipe == item.namaFilter);
    }

    if (item.jenis == 'value') {
      if (item.namaFilter == 'Harga <1jt') {
        dataHasilFilter = dataHasilFilter.filter(x => x.value <= 1000000);
      }
      if (item.namaFilter == 'Harga 1jt-10jt') {
        dataHasilFilter = dataHasilFilter.filter(
          x => x.value >= 1000000 && x.value <= 10000000,
        );
      }
      if (item.namaFilter == 'Harga >10jt') {
        dataHasilFilter = dataHasilFilter.filter(x => x.value > 10000000);
      }
    }

    setDataTampil(dataHasilFilter);
  }

  const [modal, setModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [placeLocation, setPlaceLocation] = useState('');

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
          <View style={{marginHorizontal: 20, marginBottom: 5}}>
            <FlatList
              horizontal
              data={filter}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    marginHorizontal: 5,
                    marginTop: 10,
                    backgroundColor: '#FFFFFF',
                    elevation: 2,
                    height: 30,
                    paddingHorizontal: 20,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => filterData(item)}>
                  <Text>{item.namaFilter}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <Gap height={10} />
          <FlatList
            data={dataTampil}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => setModal(true)}>
                <View style={styles.container}>
                  <AntDesign
                    name="user"
                    style={styles.Icons}
                    size={36}
                    color="#2196F3"
                  />
                  <View style={{flex: 0.5}}>
                    <Text style={styles.item}>{item.title}</Text>
                    <Text style={styles.titleText}>{item.tipe}</Text>
                    <Text style={styles.value}>{item.value}</Text>
                  </View>
                  <View style={{flex: 0.3, alignItems: 'flex-end'}}>
                    <Text style={styles.item}>{item.location}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
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
                    style={{
                      justifyContent: 'center',
                      flex: 0.2,
                      marginRight: 10,
                    }}>
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
                    style={{
                      justifyContent: 'center',
                      flex: 0.2,
                      marginRight: 10,
                    }}>
                    <Text>Set Loc</Text>
                  </TouchableOpacity>
                </SafeAreaView>
                <Gap height={20} />
                <Button title="Gunakan" />
              </View>
            </View>
          </Modal>
          {/* <JobCard
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
          /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Use;

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
  Icons: {flex: 0.2, marginLeft: 10},
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
