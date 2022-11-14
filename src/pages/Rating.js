import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header} from '../components';
import {AirbnbRating} from 'react-native-ratings';
import {ScrollView} from 'react-native-gesture-handler';

const Rating = ({navigation}) => {
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  return (
    <ScrollView>
      <View>
        <Header
          title="RATING"
          onBack={() => navigation.goBack()}
          options={() => navigation.navigate('Setting')}
        />
        <Gap height={24} />
        <View>
          <Text style={styles.text}>Berikan Penilaian Anda</Text>
          <Gap height={16} />
          <AirbnbRating
            count={5}
            reviews={['Sangat Buruk', 'Buruk', 'Lumayan', 'Bagus', 'Sempurna']}
            defaultRating={0}
            size={40}
            onFinishRating={ratingCompleted}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Rating;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    marginBottom: 6,
    color: 'black',
    textAlign: 'center',
  },
});
