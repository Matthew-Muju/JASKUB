import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import {Header, Gap, Button} from '../components';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const jeniskelamin = ['Laki-laki', 'Perempuan'];

export default class SignUp extends React.Component {
  state = {
    userName: '',
    dialNumber: '',
    email: '',
    password: '',
    errorMessage: null,
    jenisKelamin: '',
  };

  handleSignUp = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <ScrollView>
        <View>
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
            <TextInput
              placeholder="Masukan Username"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={userName => this.setState({userName})}
              value={this.state.userName}
            />
            <Gap height={16} />
            <Text style={styles.text}>Nomor Telepon</Text>
            <TextInput
              placeholder="Masukan Nomor Telepon"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={dialNumber => this.setState({dialNumber})}
              value={this.state.dialNumber}
            />
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
            <Gap height={16} />
            <Text style={styles.text}>Email</Text>
            <TextInput
              placeholder="Masukan Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <Gap height={16} />
            <Text style={styles.text}>Password</Text>
            <TextInput
              secureTextEntry
              placeholder="Masukan Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
            <Gap height={40} />
            <Button title="Daftar" onPress={this.handleSignUp} />
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
});
