import { createSelector } from 'reselect';

const selectScreenshots = (state) => state.screenshots;

const makeSelectScreenshots = () => createSelector(
  selectScreenshots,
  (screenshotsState) => screenshotsState.screenshots
);

export {
  selectScreenshots,
  makeSelectScreenshots
};
