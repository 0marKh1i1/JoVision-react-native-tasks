import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task35: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [textv, setTextv] = useState('');

  const handleSubmit = async () => {
   const dataObj = {
    name,
    age,
    country,
    timeStamp : Date.now()
  }
   const serializedJSON =  JSON.stringify(dataObj, null, 2)
   setTextv("here is the data object"+ serializedJSON);
   try{
    await AsyncStorage.setItem('user-data',serializedJSON);
   }catch(e){
    console.error('error during data storing' + e);
   }

  };
  const setData = async () => {
    try {
      const res = await AsyncStorage.getItem('user-data');
      if(res !== null){
        const data = JSON.parse(res);
        if(data.timeStamp + 60000 >= Date.now()){
          setName(data.name);
          setAge(data.age);
          setCountry(data.country);
        }
      }
    }catch(e){
      console.error('error during data retrieving' + e);
    }
  }
  useEffect(() => {
    setData();
  },[]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name here"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Enter age here"
              value={age}
              onChangeText={setAge}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter country here"
              value={country}
              onChangeText={setCountry}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
        <Text>{textv}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Task35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: 200,
  },
  btn: {
    margin: 50,
    backgroundColor: '#44f',
    padding: 10,
    borderRadius: 10,
  },
});