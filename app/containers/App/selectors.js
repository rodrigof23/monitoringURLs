import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

export {
  selectGlobal
};
