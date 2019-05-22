import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlayListsTypes } from '../ducks/playlists';

import { getPlayLists } from './playlists';

export default function* rootSaga() {
  yield all([takeLatest(PlayListsTypes.GET_REQUEST, getPlayLists)]);
}
