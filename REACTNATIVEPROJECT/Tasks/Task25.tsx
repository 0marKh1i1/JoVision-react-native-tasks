import React, { createRef } from 'react';
import { StyleSheet, View , TextInput } from 'react-native';
import { MyClassComponent_Tak25 } from '../Components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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



const Task25 = () => {
  const childRef = createRef<MyClassComponent_Tak25>();

  const handleTextChange = (text: string) => {
    if (childRef.current) {
      childRef.current.editText(text);
    }
  };

  return (
      <View style={styles.container}>
          <MyClassComponent_Tak25 ref={childRef} />
          <TextInput
            style={styles.input}
            placeholder="Enter text here"
            onChangeText={handleTextChange}
        />
      </View>
    );
};

export default Task25;
