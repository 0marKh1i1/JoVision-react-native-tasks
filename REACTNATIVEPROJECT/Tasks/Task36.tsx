import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

function Task36() {
    const size = 100;
    const [textList, setTextList] = useState<string[]>(new Array(size));

    useEffect(() => {
        let initialList = new Array(size);
        for (let index = 0; index < size; index++) {
            const randSize = Math.random() * 30;
            initialList[index] = generateRandomWord(randSize);
        }
        setTextList(initialList);
    },[]);

    return (
        <View style={styles.container}>
            <ScrollView 
            style={styles.scrollContainer}
            contentContainerStyle={{justifyContent:'center',alignItems: 'center',}}
            >
                {textList.map((text,index) => (
                    <Text key={index}>
                        {text}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
}

export default Task36;

function generateRandomWord(length:number) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz'; 
    
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length)); 
    }
    
    return result;
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    width:screenWidth,
  },
 
});