/* eslint-disable quotes */
import React, { useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, Image } from 'react-native';
import Video from 'react-native-video';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<any>(null);
  const background = require('../Resource/the_Porsche_911_GT3.mp4');
  const posterImage = require('../Resource/911_992.png');
  const posterUri = Image.resolveAssetSource(posterImage).uri;

  return (
    <View style={styles.videoContainer}>
      <Video
        source={background}
        ref={videoRef}
        style={styles.backgroundVideo}
        resizeMode="contain"
        paused={true}
        repeat={true}
        controls={true}
        poster={posterUri} 
      />
    </View>
  );
};

const Task32: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <VideoPlayer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Task32;

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: screenWidth - 20,
    height: 500,
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});
