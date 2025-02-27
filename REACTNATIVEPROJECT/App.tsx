import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Task16 , Task17} from './Tasks'

export default function App(): React.JSX.Element {

  const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
      });

  return (
    <View style={styles.container}>
      {/* <Task16></Task16> */}
      <Task17></Task17>
    </View>
    // <task16></task16>
  );
}

