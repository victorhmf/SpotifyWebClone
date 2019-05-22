import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlayListDetailsActions } from '../ducks/playlistDetails';

export function* getPlayListDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlayListDetailsActions.getPlayListDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
