import {
  LIST_SCREENSHOTS,
  LIST_SCREENSHOTS_SUCCESS,
  LIST_SCREENSHOTS_ERROR
} from './constants';

export function listScreenshots() {
  return {
    type: LIST_SCREENSHOTS
  };
}
export function listScreenshotsSuccess(data) {
  return {
    type: LIST_SCREENSHOTS_SUCCESS,
    data
  };
}
export function listScreenshotsError(error) {
  return {
    type: LIST_SCREENSHOTS_ERROR,
    error
  };
}
