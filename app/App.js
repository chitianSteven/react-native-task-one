/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as changeCount from './actions/counts'

class App extends Component {

  decrementCount() {
    let { count, actions } = this.props;
    count.count--;
    actions.changeCount(count.count);
  }

  incrementCount() {
    let { count, actions } = this.props;
    count.count++;
    actions.changeCount(count.count);
  }

  render() {
    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text>{this.props.count.count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
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