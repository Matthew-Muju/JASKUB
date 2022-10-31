import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack, Opsi} from '../../assets/icon';
import {Gap} from '../atoms';
import Icon from 'react-native-vector-icons/Ionicons';

const settingIcon = (
  <Icon name="ellipsis-vertical-sharp" size={30} color="#000003" />
);
const backIcon = <Icon name="chevron-back" size={30} color="#000003" />;

const Header = ({title, onBack, options}) => {
  return (
    <View style={styles.container}>
      <View>
        {onBack && (
          <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
            {backIcon}
          </TouchableOpacity>
        )}
      </View>
      <Gap width={26} />
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        {options && (
          <TouchableOpacity onPress={options} activeOpacity={0.7}>
            {settingIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  text: {
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    textAlign: 'center',
  },
});
