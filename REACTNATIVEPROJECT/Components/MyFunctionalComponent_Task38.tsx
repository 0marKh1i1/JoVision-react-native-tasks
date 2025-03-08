import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import ClassComp from './MyClassComponent_Tak38'
import { TextContext } from '../custom_hooks/TextContext'

interface MyFunctionalComponentProps {
  setTextValue: (value: string) => void;
  TextValue?: string;
}

const MyFunctionalComponent_Task38: React.FC<MyFunctionalComponentProps> = ({ setTextValue, TextValue = '' }) => {
  const [inValue, setInValue] = useState<string>('')

  return (
    <View style={styles.container}>
      <TextContext.Provider value={TextValue}>
        <ClassComp TextProp={TextValue} />
        <TextInput
          style={styles.input}
          value={inValue}
          onChangeText={(TempTxt) => {
            setInValue(TempTxt)
            setTextValue(TempTxt)
          }}
        />
      </TextContext.Provider>
    </View>
  )
}

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
  },
});

export default MyFunctionalComponent_Task38