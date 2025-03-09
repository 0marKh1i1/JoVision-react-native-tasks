import MyClassComponent from "../Components/MyClassComponent_Tak40";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import store from '../store';

const Task40 = () => {
    const [HideState, setHideState] = useState<boolean>(false);
    const [BtnTxt, setBtnTxt] = useState<string>('Show');

    const handleBtn = () => {
        setHideState((prev) => !prev);
        setBtnTxt((prev) => (prev === 'Show' ? 'Hide' : 'Show'));
    };

    return (
        <Provider store={store}>
            <View style={styles.container}>
                {HideState && <MyClassComponent />}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleBtn}
                >
                    <Text style={styles.buttonText}>{BtnTxt}</Text>
                </TouchableOpacity>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Task40;