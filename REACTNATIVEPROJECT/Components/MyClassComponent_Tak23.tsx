import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

interface MyClassPageProps {
  onTextChange: (change: string) => void;
}

class MyClassPage extends Component<MyClassPageProps> {
  constructor(props: MyClassPageProps) {
    super(props);
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
      backgroundColor: '#ddffaa',
      padding: 10,
      borderRadius: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      paddingHorizontal: 10,
      width: '80%',
    },
  });

  render(): React.ReactNode {
    return (
      <View style={this.styles.container}>
        <TextInput
          style={this.styles.input}
          placeholder="Enter text here"
          onChangeText={this.props.onTextChange}
        />
      </View>
    );
  }
}

export default MyClassPage;
