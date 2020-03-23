import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

export default class CounterComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (
        <View styles={styles.container}>
          <Button
            title="increment"
            onPress={() => this.props.increment}
          />
          <Text>{this.props.count}</Text>
          <Button
            title="decrement"
            onPress={() => this.props.decrement}
          />
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
