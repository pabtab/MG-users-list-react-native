import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { View } from 'react-native';
import { Thumbnail, ListItem, List, Text } from 'native-base';
import Styles from './UserDetail.styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CameraComponent from '../../components/CameraComponent';


const UserDetail = (props) => {
  const name = props.navigation.getParam('UserName');
  const [cameraOpen, setCameraOpen] = useState(false);
  const [photoUri, setPhotoUri] = useState('');

  const { payload: userDetail } = useSelector(state => state.UserDetail.payload);

  const changePictureProfile = () => {
    setCameraOpen(true);
  }

  const getPhoto = (photoUrl) => {
    setCameraOpen(false);
    setPhotoUri(photoUrl.uri);
  }
  
  if (cameraOpen) {
    return <CameraComponent handlePhoto={getPhoto} />;
  }

  return (
    <View>
      <TouchableWithoutFeedback style={Styles.profileContainer} onPress={changePictureProfile}>
        <Thumbnail large source={{uri: photoUri || userDetail.picture.thumbnail}} style={Styles.profilePic}/>
        <AntDesign name="pluscircle" style={Styles.addIconPic} />
      </TouchableWithoutFeedback>
      <View>
        <List>
          <ListItem style={Styles.userValue}>
            <Text style={Styles.label}>Name: </Text>
            <Text style={Styles.value}>{name}</Text>
          </ListItem>
          <ListItem style={Styles.userValue}>
            <Text style={Styles.label}>Country: </Text>
            <Text style={Styles.value}>{userDetail.location.country}</Text>
          </ListItem>
          <ListItem style={Styles.userValue}>
            <Text style={Styles.label}>Email: </Text>
            <Text style={Styles.value}>{userDetail.email}</Text>
          </ListItem>
          <ListItem style={Styles.userValue}>
            <Text style={Styles.label}>Cellphone: </Text>
            <Text style={Styles.value}>{userDetail.cell}</Text>
          </ListItem>
        </List>
      </View>
      
    </View>
  );
};

UserDetail.navigationOptions = navData => ({
  headerTitle: 'User Detail'
})

export default UserDetail;
