import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import { Thumbnail, ListItem, List, Text } from 'native-base';
import {HeaderBackButton} from 'react-navigation-stack';

import Styles from './UserDetail.styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CameraComponent from '../../components/CameraComponent';
import { updateProfileAction } from '../../store/actions/updateProfilePicAction';


const UserDetail = (props) => {
  const name = props.navigation.getParam('UserName');
  const [cameraOpen, setCameraOpen] = useState(false);
  const [photoUri, setPhotoUri] = useState('');
  const dispatch = useDispatch();

  const { payload: userDetail } = useSelector(state => state.UserDetail);

  const changePictureProfile = () => {
    props.navigation.setParams({ hideBackButton: true});
    setCameraOpen(true);
  }

  const getPhoto = (photoUrl) => {
    closeCamera();
    setPhotoUri(photoUrl.uri);
    updateProfile(photoUrl.uri);
  }

  const closeCamera = () => {
    props.navigation.setParams({ hideBackButton: false});
    setCameraOpen(false);
  }

  const updateProfile = (photoUrl) => {
    const newUpdateProfile = { 
      ...userDetail,
      picture: {
        thumbnail: photoUrl
      }
    };

    dispatch(updateProfileAction(newUpdateProfile));
  }
  
  if (cameraOpen) {
    return <CameraComponent 
      handlePhoto={getPhoto}
      closeCamera={closeCamera}
    />;
  }

  return (
    <View>
      <View style={Styles.profileContainer}>
        <TouchableWithoutFeedback onPress={changePictureProfile}>
          <Thumbnail large source={{uri: photoUri || userDetail.picture.thumbnail}} style={Styles.profilePic}/>
          <AntDesign name="pluscircle" style={Styles.addIconPic} />
        </TouchableWithoutFeedback>
      </View>
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

UserDetail.navigationOptions = ({navigation}) => ({
  headerTitle: 'Detail',
  headerLeft: () => {
    if (navigation.getParam('hideBackButton')) {
      return null
    }

    return <HeaderBackButton 
      onPress={() => navigation.goBack()}
    />
  }
})

export default UserDetail;
