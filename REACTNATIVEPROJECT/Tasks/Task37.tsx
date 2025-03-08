import React, { useEffect, useState } from 'react'
import { Dimensions, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

function Task37() {
    const size = 100;
    const [textList, setTextList] = useState<string[]>(new Array(size));
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        generateTextList();
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        generateTextList();
        setTimeout(() => {
            setRefreshing(false);
        }, 100);
    }, []);

    const generateTextList = () => {
        let initialList = new Array(size);
        for (let index = 0; index < size; index++) {
            const randSize = Math.random() * 30;
            initialList[index] = generateRandomWord(randSize);
        }
        setTextList(initialList);
    };

    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.scrollContainer}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                {textList.map((text, index) => (
                    <Text style={styles.scrollText} key={index}>
                        {text}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
}

export default Task37;

function generateRandomWord(length: number) {
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
        width: screenWidth,
    },
    scrollText:{
        fontSize:20,
        color:'darkorange',
    }
});