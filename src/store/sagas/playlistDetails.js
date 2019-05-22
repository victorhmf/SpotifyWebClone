import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlayListDetailsActions } from '../ducks/playlistDetails';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlayListDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlayListDetailsActions.getPlayListDetailsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter os detalhes da playlist'));
  }
}
