/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Tasks from './Tasks';

export default function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
    {/*   
      <Tasks.Task16 />
      <Tasks.Task17 />
      <Tasks.Task18 />
      <Tasks.Task19 />
      <Tasks.Task20 />
      <Tasks.Task21 />
      <Tasks.Task22 />
      <Tasks.Task23 />
      <Tasks.Task24 />
      <Tasks.Task25 />
      <Tasks.Task26 />
      <Tasks.Task27 />
      <Tasks.Task28 />
      <Tasks.Task29 />
      <Tasks.Task30 />
      <Tasks.Task31 />
      <Tasks.Task32 />
      <Tasks.Task33 />
      <Tasks.Task34 />
      <Tasks.Task35 />
      <Tasks.Task36 />
      <Tasks.Task37 />
      <Tasks.Task38 />
      <Tasks.Task39 />
    */}
      <Tasks.Task40 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
