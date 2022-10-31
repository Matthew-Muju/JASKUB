import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React, {useState} from 'react';
import {JW} from '../../assets/icon';

const JobCard = ({title, location, value, tipe}) => {
  return (
    <View>
      <TouchableOpacity>
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
    shadowColor: 'grey',
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
});
