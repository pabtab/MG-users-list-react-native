import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { Feather } from '@expo/vector-icons';

const ListItemComponent = ({image, name, handleClickDetail }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClickDetail}>
      <ListItem thumbnail>
          <Left>
            <Thumbnail source={{ uri: image }} />
          </Left>
          <Body>
            <Text>{name}</Text>
          </Body>
          <Right>
            <Feather name="chevron-right" />
          </Right>
      </ListItem>
    </TouchableWithoutFeedback>
  );
};

export default ListItemComponent;
