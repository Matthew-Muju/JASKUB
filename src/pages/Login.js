import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
// import {db} from '../components/config';
import {Header, Gap, Button} from '../components';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const jeniskelamin = ['Laki-laki', 'Perempuan'];
// const db = GetDatabase(app);
// const dbRef = ref(db);
export default class SignUp extends React.Component {
  state = {
    userName: '',
    dialNumber: '',
    email: '',
    password: '',
    errorMessage: null,
    jenisKelamin: '',
    selectedDate: new Date(),
    isDatePickerVisible: false,
  };

  // pushData() {
  //   push(ref(db, '/UserList'), {
  //     username: userName,
  //     dialnumber: dialNumber,
  //     email: email,
  //     password: password,
  //     jeniskelamin: jenisKelamin,
  //     birthdate: selectedDate,
  //   });
  // }

  writeUserData() {
    set(ref(db, 'users/' + userName), {
      username: userName,
      dialnumber: dialNumber,
      email: email,
      password: password,
      jeniskelamin: jenisKelamin,
      birthdate: selectedDate,
    })
      .then(() => {
        // Data saved successfully!
        alert('data submitted!');
      })
      .catch(error => {
        // The write failed...
        alert(error);
      });
  }

  handleSignUp = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  signUp = () => {
    this.handleSignUp();
    this.pushData();
  };

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = date => {
    this.setState({
      selectedDate: date,
    });
    hideDatePicker();
  };

  getDate = () => {
    const {date} = this.state;
    let tempDate = date.toString().split(' ');
    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.page}>
          <Header
            title="SIGN UP"
            onBack={() => this.props.navigation.goBack()}
          />
          <Gap height={26} />
          {this.state.errorMessage && (
            <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
          )}
          <View style={styles.wel}>
            <Text style={styles.welText}>Ayo Bergabung Bersama Kami</Text>
          </View>
          <View style={styles.photoWrapper}></View>
          <View style={styles.formWrapper}>
            <Text style={styles.text}>Username</Text>
            <SafeAreaView style={styles.safeView}>
              <AntDesign
                name="user"
                style={styles.Icons}
                size={28}
                color="#2196F3"
              />

              <TextInput
                value={this.state.userName}
                onChangeText={userName => this.setState({userName})}
                placeholder="Username"
              />
            </SafeAreaView>
            <Gap height={16} />
            {/* <Text style={styles.text}>Username</Text>
            <TextInput
              placeholder="Masukan Username"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={userName => this.setState({userName})}
              value={this.state.userName}
            />
            <Gap height={16} /> */}
            <Text style={styles.text}>Nomor Telepon</Text>
            <SafeAreaView style={styles.safeView}>
              <IonIcons
                name="call"
                style={styles.Icons}
                size={28}
                color="#2196F3"
              />

              <TextInput
                value={this.state.dialNumber}
                onChangeText={dialNumber => this.setState({dialNumber})}
                placeholder="Nomor Telepon"
              />
            </SafeAreaView>
            <Gap height={16} />
            <Text style={styles.text}>Jenis Kelamin</Text>
            <SelectDropdown
              data={jeniskelamin}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Pilih Jenis Kelamin'}
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
                    color={'#2196F3'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <Gap height={16} />
            <Text style={styles.text}>Tanggal Lahir</Text>
            <SafeAreaView style={styles.safeView}>
              <FontAwesome
                name="calendar"
                style={styles.Icons}
                size={28}
                color="#2196F3"
              />

              <TextInput
                value={
                  this.state.selectedDate
                    ? this.state.selectedDate.toLocaleDateString()
                    : 'No date selected'
                }
                placeholder="Birth Date"
                style={{flex: 0.9}}
              />

              <TouchableOpacity
                onPress={this.showDatePicker}
                style={{justifyContent: 'center', flex: 0.2, marginRight: 10}}>
                <Text>Set Date</Text>
                <DateTimePickerModal
                  date={this.state.selectedDate}
                  isVisible={this.state.isDatePickerVisible}
                  mode="date"
                  onConfirm={this.handleConfirm}
                  onCancel={this.hideDatePicker}
                />
              </TouchableOpacity>
            </SafeAreaView>
            <Gap height={16} />
            <Text style={styles.text}>Email</Text>
            <SafeAreaView style={styles.safeView}>
              <IonIcons
                name="mail"
                style={styles.Icons}
                size={28}
                color="#2196F3"
              />

              <TextInput
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                placeholder="E-mail"
              />
            </SafeAreaView>
            <Gap height={16} />
            <Text style={styles.text}>Password</Text>
            <SafeAreaView style={styles.safeView}>
              <FontAwesome
                name="lock"
                style={styles.Icons}
                size={28}
                color="#2196F3"
              />

              <TextInput
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
              />
            </SafeAreaView>
            <Gap height={36} />
            <Button title="Daftar" onPress={this.signUp} />
            <Gap height={20} />
            <View style={styles.wel}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text style={styles.textLogin}>Sudah Punya Akun? Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      // <View style={styles.container}>
      //   <Text>Sign Up</Text>
      //   {this.state.errorMessage && (
      //     <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
      //   )}
      //   <TextInput
      //     placeholder="Email"
      //     autoCapitalize="none"
      //     style={styles.textInput}
      //     onChangeText={email => this.setState({email})}
      //     value={this.state.email}
      //   />
      //   <TextInput
      //     secureTextEntry
      //     placeholder="Password"
      //     autoCapitalize="none"
      //     style={styles.textInput}
      //     onChangeText={password => this.setState({password})}
      //     value={this.state.password}
      //   />
      //   <Button title="Sign Up" onPress={this.handleSignUp} />
      //   <Button
      //     title="Already have an account? Login"
      //     onPress={() => this.props.navigation.navigate('SignIn')}
      //   />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  wel: {
    alignItems: 'center',
    marginBottom: 10,
  },
  welText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'black',
  },
  formWrapper: {
    paddingHorizontal: 24,
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
  textLogin: {
    color: '#0530F5',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#E8F6FF',
    borderColor: '#2196F3',
    width: 345,
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
  safeView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 10,
    backgroundColor: '#E8F6FF',
  },
  Icons: {flex: 0.1, marginLeft: 10},
});
