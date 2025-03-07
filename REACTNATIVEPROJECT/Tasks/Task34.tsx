import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCurrentTime from '../custom_hooks/useCurrentTime';

const Task34: React.FC = () => {
  const currentTime = useCurrentTime();
  const [ViewDate, setViewDate] = useState<boolean>(true)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        { ViewDate && <View>
            <Text>{currentTime.toLocaleTimeString()}</Text>
            <Text>{currentTime.toLocaleDateString()}</Text>
          </View>}
          <TouchableOpacity style={styles.btn} onPress={() => setViewDate(prev => !prev)} >
            <Text style={{color:'white',}}>Toggle Time & Date</Text>
            </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Task34;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    margin:50,
    backgroundColor:'#44f',
    padding:10,
    borderRadius: 10,
  }
});