import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{textColor:'red'}}>
        <Text> Authentication </Text>
      </View>
    );
  }
}
