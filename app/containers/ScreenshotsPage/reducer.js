import {
  LIST_SCREENSHOTS,
  LIST_SCREENSHOTS_SUCCESS,
  LIST_SCREENSHOTS_ERROR
} from './constants';

const initialState = {
  screenshots: undefined
};

function screenshotsReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_SCREENSHOTS:
      return {
        ...state,
        screenshots: {
          data: false,
          loading: true,
          error: false
        }
      };
    case LIST_SCREENSHOTS_SUCCESS:
      return {
        ...state,
        screenshots: {
          data: action.data,
          loading: false,
          error: false
        }
      };
    case LIST_SCREENSHOTS_ERROR:
      return {
        ...state,
        screenshots: {
          data: false,
          loading: false,
          error: action.error
        }
      };

    default:
      return state;
  }
}

export default screenshotsReducer;
