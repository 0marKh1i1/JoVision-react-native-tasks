/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View , Text, TouchableOpacity, Image, Dimensions, Alert, SafeAreaView, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    gap:20,
  },
});
type imageData = {
  title: string,
  id: string,
  path: any,
}

const imageList: imageData[] = [
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

const Task28 = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const imgSelectHandle = (index: number) => {
    setSelectedId(imageList[index].id);
    Alert.alert('You have selected image at index:', index.toString());
  }

  const renderImage = ({ item, index }: { item: imageData, index: number }) => {
    const selectedImg = item.id === selectedId ? true : false;

    return (
      <TouchableOpacity onPress={() => imgSelectHandle(index)} style={styles.img}>
        <Image source={item.path} style={styles.img} />
        {selectedImg && <View style={styles.overlay} />}
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={imageList}
          renderItem={renderImage}
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedId}
          horizontal={true}
          contentContainerStyle={styles.flatListCont}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Task28;
