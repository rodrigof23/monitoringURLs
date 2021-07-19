import {
  SEND_URL,
  SEND_URL_SUCCESS,
  SEND_URL_ERROR,

  LIST_URLS,
  LIST_URLS_SUCCESS,
  LIST_URLS_ERROR
} from './constants';

export function sendUrl(url) {
  return {
    type: SEND_URL,
    url
  };
}
export function sendUrlSuccess(data) {
  return {
    type: SEND_URL_SUCCESS,
    data
  };
}
export function sendUrlError(error) {
  return {
    type: SEND_URL_ERROR,
    error
  };
}

export function listUrls() {
  return {
    type: LIST_URLS
  };
}
export function listUrlsSuccess(data) {
  return {
    type: LIST_URLS_SUCCESS,
    data
  };
}
export function listUrlsError(error) {
  return {
    type: LIST_URLS_ERROR,
    error
  };
}
