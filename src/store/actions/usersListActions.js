import { put, takeLatest } from 'redux-saga/effects';
import { GET_USERS_LIST_LOADING, GET_USERS_LIST, GET_USERS_LIST_ERROR, GET_USERS_LIST_ASYNC } from './actionTypes';

import { getUsers } from '../../api';

function* getUserList({pageNum}) {
  yield put({ type: GET_USERS_LIST_LOADING, isLoading: true });
  
  try {
    const response = yield getUsers(pageNum);

    yield put({ type: GET_USERS_LIST, payload: response.results, isLoading: false });
  } catch (error) {
    yield put({ type: GET_USERS_LIST_ERROR, payload: [], isLoading: false });
    
  }
}

export function* getUsersListAsync() {
  yield takeLatest(GET_USERS_LIST_ASYNC, getUserList);
}

export const callUsersListApi = (pageNum) => ({
  type: GET_USERS_LIST_ASYNC,
  pageNum
});