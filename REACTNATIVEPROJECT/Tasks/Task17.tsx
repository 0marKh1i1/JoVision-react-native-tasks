import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Task16 = () => {
    const [componentHideAndShow,setComponentHideAndShow] = useState<boolean>(false);
    const [buttonText,setButtonText] = useState<string>("Show");
    const toggleContentVisibility = () => {
      setComponentHideAndShow(previousState => !previousState);
      setButtonText(prev => prev == "Show" ? "Hide" : "Show");
    }
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
      },
    });
    return (
        <View style={styles.container}>
          {
            componentHideAndShow && <Text style= {styles.headerText}> Omar Khalil </Text>
          }
          <Button title={buttonText} onPress={toggleContentVisibility}/>
        </View>
      );
}

export default Task16 ;