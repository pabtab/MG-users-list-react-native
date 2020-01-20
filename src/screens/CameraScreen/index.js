import React from 'react'
import { View, Text } from 'react-native'

const CameraScreen = () => {
  return (
    <CameraComponent handlePhoto={getPhoto} />
  )
}

export default CameraScreen
