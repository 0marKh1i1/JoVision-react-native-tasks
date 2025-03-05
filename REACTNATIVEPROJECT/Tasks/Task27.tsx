/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View , Text, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',

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
  img:{
    height:400,
    width: screenWidth - 50,
    resizeMode:'contain',
  },
});

const imageMap: {[key:string]:any} = {
  '911-dakar': require('../Resource/911_dakar.png'),
  '911-992': require('../Resource/911_992.png'),
  '911-gt3-rs': require('../Resource/911-gt3-rs.png'),
};

const Task27 = () => {
  const [imgSource,setImgSource] = useState<string>('911-dakar')
  useEffect(() => {
    const imageSource = imageMap[imgSource];
  
    return () => {
    }
  },[imgSource])
  

  function handleimgbtn(){
    Alert.alert('Choose Image','you got three options',[
      {
        text:'911 gt3 rs ',
        onPress: () => setImgSource('911-gt3-rs'),
      },
      {
        text:'911 992 ',
        onPress: () => setImgSource('911-992'),
      },
      {
        text:'911 dakar ',
        onPress: () => setImgSource('911-dakar'),
      },
    ])
    setImgSource('another-image');
  }

  return (
      <View style={styles.container}>
        <Image
        style={styles.img}
        source={imageMap[imgSource]}
      />
        <TouchableOpacity style={styles.btn} onPress={handleimgbtn}>
          <Text style={styles.btnText}>Choose Image</Text>
        </TouchableOpacity>
      </View>
    );
};

export default Task27;
 