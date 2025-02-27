import React from 'react';
import { StyleSheet, View } from 'react-native';
import Task16 from './Tasks/Task16'

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
      <Task16></Task16>
    </View>
    // <task17></task17>
  );
}

