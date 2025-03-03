import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';



class MyClassComponent_Tak20 extends Component<{}> {
    constructor(props : {}) {
      super(props);
      this.state = {};
    }
    componentDidMount(){
      console.log('Task 20 is loaded');
    }
    componentWillUnmount(){
      console.log('Task 20 is unloaded');
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
export default MyClassComponent_Tak20;
