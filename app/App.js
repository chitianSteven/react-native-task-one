/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginComponent from './components/loginComponent/loginComponent'
import RegisterComponent from './components/registerComponent/registerComponent'
import MainPageComponent from './components/mainPageComponent/mainPageComponent'
import ProductDetailsPageComponent from './components/productDetailsPageComponent/productDetailsPageComponent'
import DrawerComponent from './components/drawerComponent/drawerComponent'

function DrawerScreen({ navigation }) {
  return (
    <DrawerComponent navigation={navigation} ></DrawerComponent>
  );
}

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

function ProductDetailsPageScreen({ navigation }) {
  return (
    <ProductDetailsPageComponent navigation={navigation} ></ProductDetailsPageComponent>
  );
}

const Stack = createStackNavigator();
const pages = [
  {
    'name': 'LoginScreen',
    'component': LoginScreen
  }, {
    'name':'RegisterScreen', 
    'component': RegisterScreen
  }, {
    'name':'MainPageScreen', 
    'component': MainPageScreen
  }, {
    'name':'ProductDetailsPageScreen', 
    'component': ProductDetailsPageScreen
  }]

const MainStackScreen = () => (
  <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
    {pages.map(function (page) {
      return (
        <Stack.Screen name={page.name} component={page.component} />
      )
    })}
  </Stack.Navigator>
);

const Root = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Root.Navigator initialRouteName="MainStackScreen" drawerContent={DrawerScreen}>
          <Root.Screen name="MainStackScreen" component={MainStackScreen} />
        </Root.Navigator>
      </NavigationContainer>
    );
  }
};

const mapStateToProps = state => ({
});

const ActionCreators = Object.assign(
  {}
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)