import { all } from 'redux-saga/effects'
import { getUsersListAsync } from './usersListActions'
import { setDetailUserAsync } from './usersDetailActions'

export default function* rootSaga() {
  yield all([
    getUsersListAsync(),
    setDetailUserAsync()
  ])
}