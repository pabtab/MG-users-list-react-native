import { put, takeLatest } from 'redux-saga/effects';

import { UPDATE_PROFILE_PICTURE, UPDATE_PROFILE_PICTURE_ASYNC } from './actionTypes';

function* updateProfilePic(userUpdated) {
  yield put({type: UPDATE_PROFILE_PICTURE, payload: userUpdated.payload})
}

export function* updateProfilePicture() {
  yield takeLatest(UPDATE_PROFILE_PICTURE_ASYNC, updateProfilePic);
}

export const updateProfileAction = (profile) => ({
  type: UPDATE_PROFILE_PICTURE_ASYNC,
  payload: profile
})