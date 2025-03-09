import React, { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import ClassComp from './MyClassComponent_Tak39';
import { useDispatch, useSelector } from 'react-redux';
import { updateTextView } from '../store';

const MyFunctionalComponent_Task39: React.FC = () => {
  const dispatch = useDispatch();
  const textValue = useSelector((state: any) => state.textView.textView);
  const [inValue, setInValue] = useState<string>(textValue);

  useEffect(() => {
    setInValue(textValue);
  }, [textValue]);

  const handleChangeText = (TempText: string) => {
    setInValue(TempText);
    dispatch(updateTextView(TempText));
  };

  return (
    <View style={styles.container}>
      <ClassComp />
      <TextInput
        style={styles.input}
        value={inValue}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: '#aa5544',
    borderWidth: 1,
    borderRadius: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    minWidth: 100,
    maxWidth: 300,
    color: 'lightgray',
  },
});

export default MyFunctionalComponent_Task39;