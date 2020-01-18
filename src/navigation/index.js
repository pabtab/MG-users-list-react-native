import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UsersList from '../screens/UsersList';
import UserDetail from '../screens/UserDetail';

const screensContainer = createStackNavigator({
  List: UsersList,
  UserDetail
});

export default createAppContainer(screensContainer);