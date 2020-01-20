import { all } from 'redux-saga/effects';
import { getUsersListAsync } from './usersListActions';
import { setDetailUserAsync } from './usersDetailActions';
import { updateProfilePicture } from './updateProfilePicAction';


export default function* rootSaga() {
  yield all([
    getUsersListAsync(),
    setDetailUserAsync(),
    updateProfilePicture()
  ])
}