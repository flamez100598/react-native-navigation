import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{textColor:'yellow'}}>
        <Text> ChangeInfo </Text>
      </View>
    );
  }
}
