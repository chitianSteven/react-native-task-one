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

const Stack = createStackNavigator();

class App extends Component {

  // decrementCount() {
  //   let { count, actions } = this.props;
  //   count.count--;
  //   actions.changeCount(count.count);
  // }

  // incrementCount() {
  //   let { count, actions } = this.props;
  //   count.count++;
  //   actions.changeCount(count.count);
  // }

  render() {
    return (
      // <View styles={styles.container}>
      //   <Button
      //     title="increment"
      //     onPress={() => this.incrementCount()}
      //   />
      //   <Text>{this.props.count.count}</Text>
      //   <Button
      //     title="decrement"
      //     onPress={() => this.decrementCount()}
      //   />
      // </View>

      // <LoginComponent></LoginComponent>
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
        }}/>
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