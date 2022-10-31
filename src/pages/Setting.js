import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header} from '../components';
import {firebase} from '@react-native-firebase/auth';

const Setting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Header onBack={() => navigation.goBack()} title="Setting" />
      </View>
      <Gap height={16} />
      <View style={styles.content}>
        <Button
          title="Edit Profil"
          onPress={() => navigation.navigate('EditProfil')}
        />
        <Gap height={20} />
        <Button title="About" />
        <Gap height={20} />
        <Button
          title="Sign Out"
          color="#d40426"
          onPress={async () => {
            await firebase.auth().signOut();
          }}
        />
        <Gap height={20} />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
  },
});
