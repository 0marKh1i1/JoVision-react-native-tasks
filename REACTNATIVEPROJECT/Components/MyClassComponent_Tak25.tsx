/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  myClassText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: '#ffddff',
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

interface MyClassPageProps {}

interface MyClassPageState {
  viewText: string;
}

class MyClassPage extends Component<MyClassPageProps, MyClassPageState> {

  constructor(props: MyClassPageProps) {
    super(props);
    this.state = {
      viewText: 'Text',
    };
  }

  editText = (newText: string) => {
    this.setState({ viewText: newText });
  };

  getText = () => {
    return this.state.viewText;
  };

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.myClassText}>{this.state.viewText}</Text>
      </View>
    );
  }
}

export default MyClassPage;
