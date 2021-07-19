import { createSelector } from 'reselect';

const selectLinks = (state) => state.links;

const makeSelectUrlSended = () => createSelector(
  selectLinks,
  (linksState) => linksState.urlSended
);

const makeSelectUrls = () => createSelector(
  selectLinks,
  (linksState) => linksState.urls
);

export {
  selectLinks,
  makeSelectUrlSended,
  makeSelectUrls
};
