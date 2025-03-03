import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';



class MyClassComponent_Tak19 extends Component<{}> {
    constructor(props : {}) {
      super(props);
      this.state = {};
    }
    styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    myClassText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
      backgroundColor: '#bbddff',
      padding:10,
      borderRadius: 10,
    },
  });
    render(): React.ReactNode  {
      return (
        <View style={this.styles.container}>
          <Text style={this.styles.myClassText}>MyClassPage Component</Text>
        </View>
      );
    }
}
export default MyClassComponent_Tak19;
