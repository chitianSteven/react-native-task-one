/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as changeCount from './actions/counts'
import LoginComponent from './components/loginComponent/loginComponent'
import RegisterComponent from './components/registerComponent/registerComponent'
import MainPageComponent from './components/mainPageComponent/mainPageComponent'

function LoginScreen({ navigation }) {
  return (
    <LoginComponent navigation={navigation} ></LoginComponent>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <RegisterComponent navigation={navigation} ></RegisterComponent>
  );
}

function MainPageScreen({ navigation }) {
  return (
    <MainPageComponent navigation={navigation} ></MainPageComponent>
  );
}

const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
            title: 'LoginScreen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
            title: 'RegisterScreen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen name="MainPageScreen" component={MainPageScreen} options={{
            title: 'MainPageScreen',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)