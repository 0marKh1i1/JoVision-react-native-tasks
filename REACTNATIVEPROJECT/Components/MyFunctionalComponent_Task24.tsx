/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  myClassText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: '#aaddff',
    padding: 10,
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

interface MyFunctionPageRef {
  editText: (newText: string) => void;
  getText: () => string;
}

const MyFunctionPage = forwardRef<MyFunctionPageRef>((props, ref) => {
  const [viewText, setViewText] = useState<string>('Text');

  useImperativeHandle(ref, () => ({
    editText(newText: string) {
      setViewText(newText);
    },
    getText() {
      return viewText;
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.myClassText}>{viewText}</Text>
    </View>
  );
});

export default MyFunctionPage;
