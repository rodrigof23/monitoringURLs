import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import request from 'utils/request';
import { listScreenshotsSuccess, listScreenshotsError } from './actions';
import { LIST_SCREENSHOTS } from './constants';

export function* listScreenshots() {
  const requestURL = '/api/screenshots';

  try {
    const response = yield call(request, requestURL);

    yield put(listScreenshotsSuccess(response));
  } catch (err) {
    yield put(listScreenshotsError(err));
  }
}

export default function* screenshots() {
  yield takeLatest(LIST_SCREENSHOTS, listScreenshots);
}
