import React from 'react';
import {StyleSheet} from 'react-native';
import {
  SignIn,
  SignUp,
  Home,
  ProfilUser,
  EditProfil,
  Offer,
  Use,
  Login,
  LoadingScreen,
  List,
  Setting,
} from './pages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavScreen = () => {
  const color = '#808080';
  const size = 90;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2196F3',
        tabBarStyle: {
          padding: 10,
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Homescreen"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          // tabBarLabelStyle: {fontSize: 30},
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="home"
              color={color}
              size={30}
              // style={{marginTop: 10}}
            />
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: 'Status',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="list" color={color} size={30} />
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
      <Tab.Screen
        name="ProfileUser"
        component={ProfilUser}
        options={{
          tabBarLabel: 'ProfileUser',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" color={color} size={30} />
          ),
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={NavScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfil"
        component={EditProfil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Offer"
        component={Offer}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Use" component={Use} options={{headerShown: false}} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
