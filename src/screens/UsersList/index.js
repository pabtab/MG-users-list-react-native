import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Header, Content } from 'native-base';

import { FlatList, ActivityIndicator, View } from 'react-native';
import { callUsersListApi } from '../../store/actions/usersListActions';
import ListItemComponent from '../../components/ListItemComponent';
import { setDetailUser } from '../../store/actions/usersDetailActions';

const UsersList = (props) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { payload: usersList, isLoading: loadingUsers } = useSelector(state => state.UsersList);

  useEffect(() => {
    dispatch(callUsersListApi(page));
  }, [])

  const getMoreUsers = () => {
    if (!loadingUsers && page < 10) {
      const pageNum = page + 1;
      setPage(pageNum);
      dispatch(callUsersListApi(pageNum));
    }
  }

  const goToDetail = (item, name) => {
    dispatch(setDetailUser(item));
    props.navigation.navigate('UserDetail', {
      UserName: name
    });
  }

  const renderKey = (item) => item.login.username

  const renderListItem = ({item}) => {
    const { title, first, last } = item.name;
    const name = `${title} ${first} ${last}`;

    return (
      
      <ListItemComponent 
        handleClickDetail={() => goToDetail(item, name)} 
        name={name}
        image={item.picture.thumbnail}
      />
    );
  }

  const renderFooter = () => {
    if (loadingUsers) {
      return <ActivityIndicator />;
    }

    return <View />;
  }

  return (
    <View>
      <FlatList
        data={usersList}
        renderItem={renderListItem}
        keyExtractor={renderKey}
        onEndReachedThreshold={0.2}
        onEndReached={getMoreUsers}
        ListEmptyComponent={<View></View>}
        initialNumToRender={30}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

UsersList.navigationOptions = navData => ({
  headerTitle: 'Users'
})

export default UsersList;
