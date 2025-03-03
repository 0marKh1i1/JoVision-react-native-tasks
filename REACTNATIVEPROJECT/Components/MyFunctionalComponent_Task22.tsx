import React, { useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

interface MyFunctionPageProps{
  onTextChange: (text : string) => void;
}

const MyFunctionPage:React.FC<MyFunctionPageProps> = ({onTextChange}) => {
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
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      paddingHorizontal: 10,
      width: '80%',
    },
  });

  useEffect(() => {
    console.log('Task 21 is loaded');
    return () => {console.log('Task 20 is unloaded');};
  }, []);

return (
        <View style={styles.container}>
          <TextInput
          style={styles.input}
          placeholder="Enter text here"
          onChangeText={onTextChange}
          />
        </View>
      );
};
export default MyFunctionPage;
