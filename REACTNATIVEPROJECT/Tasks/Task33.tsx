/* eslint-disable quotes */
import React, { useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        controls={false}
        poster={posterUri}
      />
      <PauseVideo videoRef={videoRef} />
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

function PauseVideo({ videoRef }: { videoRef: any }) {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  let iconName: string = isPaused ? 'play-circle' : 'pause-circle';

  const playHandle = () => {
    setIsPaused((prev) => !prev);
    if (isPaused) {
      videoRef.current?.resume();
    } else {
      videoRef.current?.pause();
    }
  };

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={playHandle}>
      <Icon name={iconName} size={50} color="#999" />
    </TouchableOpacity>
  );
}

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
