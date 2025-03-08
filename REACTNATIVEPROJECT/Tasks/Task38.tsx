import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FunctionComp from "../Components/MyFunctionalComponent_Task38"
import { TextContext } from '../custom_hooks/TextContext'

const Task38 = () => {
    const [TextValue, setTextValue] = useState<string>('Example')

    return (
        <View style={styles.container}>
            <TextContext.Provider value={TextValue}>
                <FunctionComp setTextValue={setTextValue} TextValue={TextValue} />
                <FunctionComp setTextValue={setTextValue} TextValue={TextValue} />
                <FunctionComp setTextValue={setTextValue} TextValue={TextValue} />
                <FunctionComp setTextValue={setTextValue} TextValue={TextValue} />
            </TextContext.Provider>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Task38