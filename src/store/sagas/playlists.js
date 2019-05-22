import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlayListsActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlayLists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlayListsActions.getPlayListsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter as playlists'));
  }
}
