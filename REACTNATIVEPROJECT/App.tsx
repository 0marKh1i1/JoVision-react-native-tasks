/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Task16 , Task17, Task18 , Task19} from './Tasks';

export default function App(): React.JSX.Element {

  const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });

  return (
    <View style={styles.container}>
      {/* <Task16 /> */}
      {/* <Task17 /> */}
      {/* <Task18 /> */}
      <Task19 />
    </View>
  );
}

