import React, { useState } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import { MyFunctionalComponent_Task22 } from '../Components';

const Task22 = () => {
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
        <MyFunctionalComponent_Task22 onTextChange={handleTextChange}/>
      </View>
    );
};

export default Task22;
