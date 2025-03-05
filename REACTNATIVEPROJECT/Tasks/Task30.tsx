/* eslint-disable quotes */
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View , Text, TouchableOpacity, Image, Dimensions, Alert, SafeAreaView, FlatList, Modal, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Task30 = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [imageList, setImageList] = useState<imageData[]>(initialImageList);
  const scrollRef = useRef<FlatList>(null);

  const imgSelectHandle = (index: number) => {
    setSelectedId(imageList[index].id);
    Alert.alert('You have selected image at index:', index.toString());
  }

  const renderImage = ({ item, index }: { item: imageData, index: number }) => {
    const selectedImg = item.id === selectedId ? true : false;
    return (
      <View style={styles.imgContainer}>
        <TouchableOpacity onPress={() => imgSelectHandle(index)} style={styles.img}>
          <Image source={item.path} style={styles.img} />
          {selectedImg && <View style={styles.overlay} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImgDelete(item.id)} style={styles.deleteBtn}>
          <Text style={styles.deleteBtnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleEnterIndex = () => {
    const index = parseInt(inputValue, 10);
    if (!isNaN(index) && index >= 0 && index < imageList.length) {
      imgSelectHandle(index);
      setModalVisible(false);
      scrollRef.current?.scrollToIndex({ animated: true, index });
    } else {
      Alert.alert('Invalid index', 'Please enter a valid index.');
    }
  };

  const handleImgDelete = (id: string) => {
    const updatedList = imageList.filter(item => item.id !== id);
    if (updatedList.length > 0) {
      scrollRef.current?.scrollToIndex({ animated: true, index: updatedList.length - 1 });
    }
    setImageList(updatedList);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible((prev) => !prev);
          }}>
            <View style={styles.container}>
              <View style={styles.modal}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter index here"
                  placeholderTextColor={'#bbb'}
                  keyboardType="numeric"
                  value={inputValue}
                  onChangeText={setInputValue}
                />  
                <TouchableOpacity
                  style={[styles.btn , {backgroundColor:'#aaffaa'}]}
                  onPress={handleEnterIndex}>
                  <Text style={styles.btnText}>Enter Index</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn , {backgroundColor:'#ffaaaa'}]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.btnText}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
        <FlatList
          data={imageList}
          renderItem={renderImage}
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedId}
          horizontal={true}
          contentContainerStyle={styles.flatListCont}
          ref={scrollRef} 
        />
        <TouchableOpacity style={styles.showBtn} onPress={() => setModalVisible((pre) => !pre)}>
          <Text style={styles.ShowBtnText}>Index Input</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Task30;

type imageData = {
  title: string,
  id: string,
  path: any,
}

const initialImageList: imageData[] = [
  {
    title: '911-gt3-rs',
    id: '911-gt3-rs',
    path: require('../Resource/911-gt3-rs.png')
  },
  {
    title: '911_dakar',
    id: '911_dakar',
    path: require('../Resource/911_dakar.png')
  },
  {
    title: '911_992',
    id: '911_992',
    path: require('../Resource/911_992.png')
  },
  {
    title: 'bugatti_classic',
    id: 'bugatti_classic',
    path: require('../Resource/bugatti_classic.jpg')
  },
  {
    title: 'Audi-R8-V10',
    id: 'Audi-R8-V10',
    path: require('../Resource/Audi-R8-V10.jpg')
  },
  {
    title: 'bugatti-chiron',
    id: 'bugatti-chiron',
    path: require('../Resource/bugatti-chiron.jpg')
  },
  {
    title: 'Bugatti_Veyron',
    id: 'Bugatti_Veyron',
    path: require('../Resource/Bugatti_Veyron.jpeg')
  },
  {
    title: 'Bugatti_Tourbillon',
    id: 'Bugatti_Tourbillon',
    path: require('../Resource/Bugatti_Tourbillon.jpg')
  },
  {
    title: 'bugatti-divo',
    id: 'bugatti-divo',
    path: require('../Resource/bugatti-divo.jpg')
  },
  {
    title: 'Barbagallo_Maserati.jpg',
    id: 'Barbagallo_Maserati',
    path: require('../Resource/Barbagallo_Maserati.jpg')
  },
];

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    position: 'relative',
  },
  img: {
    height: 400,
    width: screenWidth - 50,
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  flatListCont: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  btn: {
    height: 60,
    width: 150,
    textAlign: 'center',
    backgroundColor: '#aaffff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
    borderRadius: 20,
    zIndex: 1, 
  },
  showBtn: {
    height: 80,
    width: 200,
    textAlign: 'center',
    backgroundColor: '#aaffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 20,
    position:'absolute',
    bottom:120,
  },
  btnText: {
    color: 'black',
    fontSize: 16,
  },
  ShowBtnText: {
    color: 'black',
    fontSize: 32,
  },
  modal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 60,
    width:150,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius:20,
    color:'black',
  },
  deleteBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteBtnText: {
    color: 'white',
    fontSize: 16,
  },
});
