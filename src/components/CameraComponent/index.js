import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import Styles from './CameraComponent.styles';



const CameraComponent = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let cameraRef;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync({skipProcessing: true});
      props.handlePhoto(photo);
    }
  }

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={ref => {
          cameraRef = ref;
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
            <TouchableOpacity 
              onPress={props.closeCamera}
              style={Styles.iconTouchable}>
              <Ionicons name="md-close" style={Styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={takePicture}
              style={Styles.iconTouchable}>
              <Ionicons name="md-camera" style={Styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.iconTouchable}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Ionicons name="md-reverse-camera" style={Styles.icons} />
            </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

export default CameraComponent
