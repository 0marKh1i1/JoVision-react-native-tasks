import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { MyFunctionalComponent_Task21 } from '../Components';

const Task21 = () => {
  const [componentHideAndShow,setComponentHideAndShow] = useState<boolean>(true);
  const [buttonText,setButtonText] = useState<string>('Hide');

  const toggleContentVisibility = () => {
    setComponentHideAndShow(previousState => !previousState);
    setButtonText(prev => prev === 'Show' ? 'Hide' : 'Show');
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
        {
          componentHideAndShow && <MyFunctionalComponent_Task21 />
        }
        <Button title={buttonText} onPress={toggleContentVisibility}/>
      </View>
    );
};

export default Task21;
