import React, { useState } from 'react';
import { StyleSheet, View, Text, Button , ActivityIndicator } from 'react-native';

const Task18 = () => {
    const [componentHideAndShow,setComponentHideAndShow] = useState<boolean>(true);
    const [loading,setLoading] = useState<boolean>(true);
    const [buttonText,setButtonText] = useState<string>('Hide');

    const toggleContentVisibility = () => {
      setComponentHideAndShow(previousState => !previousState);
      setButtonText(prev => prev === 'Show' ? 'Hide' : 'Show');
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
      },
    });

    setTimeout(() => setLoading(false),5000);

    if(loading) {return(
      <View style={styles.container}>
        <Text>{'Loading...'}</Text>
        <ActivityIndicator size="large" color="#00aadd" />
      </View>
    );}
    else {return (
        <View style={styles.container}>
          {
            componentHideAndShow && <Text style= {styles.headerText}> {'Omar Khalil'} </Text>
          }
          <Button title={buttonText} onPress={toggleContentVisibility}/>
        </View>
      );}
};

export default Task18;
