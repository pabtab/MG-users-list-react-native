import React from 'react';
import { View, Text } from 'react-native';

const UserDetail = (props) => {

  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

UserDetail.navigationOptions = navData => ({
  headerTitle: navData.navigation.getParam('userName')
})

export default UserDetail;
