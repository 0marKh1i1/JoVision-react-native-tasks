import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';



const MyFunctionPage = () => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    myClassText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
      backgroundColor: '#ddffaa',
      padding:10,
      borderRadius: 10,
    },
  });

  useEffect(() => {
    console.log('Task 21 is loaded');
    return () => {console.log('Task 20 is unloaded');}
  }, []);

return (
        <View style={styles.container}>
          <Text style={styles.myClassText}>MyFunctionPage Component</Text>
        </View>
      );
};
export default MyFunctionPage;
