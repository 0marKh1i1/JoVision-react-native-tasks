import React, { useState } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import { MyClassComponent_Tak23 } from '../Components';

const Task23 = () => {
  const [viewText , setViewText] = useState<string>('hi');

  const handleTextChange = (change : string) => {
    setViewText(change);
  };

  const styles = StyleSheet.create({
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

  return (
      <View style={styles.container}>
        <Text style={styles.myClassText}>{viewText}</Text>
        <MyClassComponent_Tak23 onTextChange={handleTextChange}/>
      </View>
    );
};

export default Task23;
