import { put, takeLatest } from 'redux-saga/effects';

import { GET_USER_DETAIL, GET_USER_DETAIL_ASYNC } from './actionTypes';

function* setDetailUserAction(userSelected) {
  yield put({type: GET_USER_DETAIL, payload: userSelected})
}

export function* setDetailUserAsync() {
  yield takeLatest(GET_USER_DETAIL_ASYNC, setDetailUserAction);
}

export const setDetailUser = (userSelected) => ({
  type: GET_USER_DETAIL_ASYNC,
  payload: userSelected
})