import {
  SEND_URL,
  SEND_URL_SUCCESS,
  SEND_URL_ERROR,

  LIST_URLS,
  LIST_URLS_SUCCESS,
  LIST_URLS_ERROR
} from './constants';

const initialState = {
  urlSended: undefined,
  urls: undefined
};

function linksReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_URL:
      return {
        ...state,
        urlSended: {
          data: false,
          loading: true,
          error: false
        }
      };
    case SEND_URL_SUCCESS:
      return {
        ...state,
        urlSended: {
          data: action.data,
          loading: false,
          error: false
        }
      };
    case SEND_URL_ERROR:
      return {
        ...state,
        urlSended: {
          data: false,
          loading: false,
          error: action.error
        }
      };

    case LIST_URLS:
      return {
        ...state,
        urls: {
          data: false,
          loading: true,
          error: false
        }
      };
    case LIST_URLS_SUCCESS:
      return {
        ...state,
        urls: {
          data: action.data,
          loading: false,
          error: false
        }
      };
    case LIST_URLS_ERROR:
      return {
        ...state,
        urls: {
          data: false,
          loading: false,
          error: action.error
        }
      };

    default:
      return state;
  }
}

export default linksReducer;
