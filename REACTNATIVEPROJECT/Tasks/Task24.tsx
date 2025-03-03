import React, { useRef } from 'react';
import { StyleSheet, View , TextInput } from 'react-native';
import { MyFunctionalComponent_Task24 } from '../Components';

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

interface MyFunctionPageRef {
  editText: (newText: string) => void;
  getText: () => string;
}

const Task24 = () => {
  const childRef = useRef<MyFunctionPageRef>(null);

  const handleTextChange = (text: string) => {
    if (childRef.current) {
      childRef.current.editText(text);
    }
  };

  return (
      <View style={styles.container}>
          <MyFunctionalComponent_Task24 ref={childRef} />
          <TextInput
            style={styles.input}
            placeholder="Enter text here"
            onChangeText={handleTextChange}
        />
      </View>
    );
};

export default Task24;
