import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlayListsActions } from '../ducks/playlists';

export function* getPlayLists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlayListsActions.getPlayListsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
