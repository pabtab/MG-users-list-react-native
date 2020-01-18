import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Header, Content } from 'native-base';

import { FlatList, ActivityIndicator } from 'react-native';
import { callUsersListApi } from '../../store/actions/usersListActions';
import ListItemComponent from '../../components/ListItemComponent';
import { setDetailUser } from '../../store/actions/usersDetailActions';

const UsersList = (props) => {
  const dispatch = useDispatch();
  const { payload: usersList, isLoading: loadingUsers } = useSelector(state => state.UsersList);

  useEffect(() => {
    dispatch(callUsersListApi());
  }, [])

  const goToDetail = (item) => {
    dispatch(setDetailUser(item));
    props.navigation.navigate('UserDetail');
  }

  const renderKey = (item) => item.login.username

  const renderListItem = ({item}) => {
    const { title, first, last } = item.name;
    const name = `${title} ${first} ${last}`;

    return (
      
      <ListItemComponent 
        handleClickDetail={() => goToDetail(item)} 
        name={name}
        image={item.picture.thumbnail}
      />
    );
  }

  return (
    <Container>
      <Content>
        {
          loadingUsers
          ? <ActivityIndicator />
          : <FlatList
              data={usersList}
              renderItem={renderListItem}
              keyExtractor={renderKey}
            />
        }
      </Content>
    </Container>
  );
}

UsersList.navigationOptions = navData => ({
  headerTitle: 'Users'
})

export default UsersList;
