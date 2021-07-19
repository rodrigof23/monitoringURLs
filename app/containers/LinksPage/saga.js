import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import request from 'utils/request';
import {
  sendUrlSuccess,
  sendUrlError,
  listUrlsSuccess,
  listUrlsError
} from './actions';
import { SEND_URL, LIST_URLS } from './constants';

export function* sendUrl(action) {
  const requestURL = '/api/links';
  const requestOpts = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      url: action.url
    })
  };

  try {
    const response = yield call(request, requestURL, requestOpts);

    yield put(sendUrlSuccess(response));
  } catch (err) {
    yield put(sendUrlError(err));
  }
}

export function* listUrls() {
  const requestURL = '/api/links';

  try {
    const response = yield call(request, requestURL);

    yield put(listUrlsSuccess(response));
  } catch (err) {
    yield put(listUrlsError(err));
  }
}

export default function* links() {
  yield takeLatest(SEND_URL, sendUrl);
  yield takeLatest(LIST_URLS, listUrls);
}
