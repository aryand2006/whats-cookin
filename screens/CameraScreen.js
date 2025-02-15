import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraScreen = ({ navigation }) => {
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    const requestPermission = async () => {
      const status = await Camera.requestCameraPermission();
      if (status !== 'authorized') {
        console.error('Camera permission denied');
      }
    };
    requestPermission();
  }, []);

  if (device == null) return <Text>Loading camera...</Text>;

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <Button title="Detect Ingredients" onPress={() => navigation.navigate('Recipes')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CameraScreen;
