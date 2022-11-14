import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, StatusList} from '../components';

const List = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Header
            title="Riwayat"
            options={() => navigation.navigate('Setting')}
          />
        </View>
        <Gap height={16} />
        <View>
          <StatusList
            title="Bangun Rumah"
            date="17/11/2022"
            status="Digunakan"
          />
          <Gap height={16} />
          <StatusList
            title="Renovasi Rumah"
            date="17/11/2022"
            status="Digunakan"
          />
          <Gap height={16} />
          <StatusList title="Bangun Rumah" date="11/10/2022" status="Selesai" />
          <Gap height={16} />
          <StatusList
            title="Renovasi Rumah Rumah"
            date="01/07/2022"
            status="Selesai"
          />
          <Gap height={16} />
        </View>
      </View>
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({});
