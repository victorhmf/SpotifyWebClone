import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlayListsTypes } from '../ducks/playlists';
import { Types as PlayListDetailsTypes } from '../ducks/playlistDetails';

import { getPlayLists } from './playlists';
import { getPlayListDetails } from './playlistDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(PlayListsTypes.GET_REQUEST, getPlayLists),
    takeLatest(PlayListDetailsTypes.GET_REQUEST, getPlayListDetails),
  ]);
}
