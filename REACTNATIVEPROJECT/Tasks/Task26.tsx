import React, { useState } from 'react';
import { StyleSheet, View , Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',

  },
  myText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    backgroundColor: '#aaddff',
    padding: 10,
    borderRadius: 10,
  },
  cont: {
    flexDirection:'row',
    gap: 2,
    height:40,
    width:200,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },
  btn: {
    height: 40,
    width: 'auto',
    textAlign: 'center',
    backgroundColor: '#aaffbb',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    padding:5,
    borderRadius: 5,
  },
  btnText: {
    color: 'black',
    fontSize: 16,
  },
});



const Task26 = () => {
  const [ip, setIp] = useState<string>('Example');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleBlockingReq() {
    setLoading(true);
    try{
      const res = await fetch('https://api.ipify.org/');
      const data = await res.text();
      setIp(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  async function handleNonBlockingReq() {
    try{
      const res = await fetch('https://api.ipify.org/');
      const data = await res.text();
      setIp(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  function handleReset() {
    setIp('Example');
  }
  if(loading) {return(<ActivityIndicator size="large" color="#00ddff" />);}
  return (
      <View style={styles.container}>
        <Text style={styles.myText}>{ip}</Text>

        <View style={styles.cont}>
          <TouchableOpacity style={styles.btn} onPress={handleBlockingReq}>
            <Text style={styles.btnText}>Blocking Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleNonBlockingReq}>
            <Text style={styles.btnText}>Non-Blocking Request</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleReset}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
};

export default Task26;
