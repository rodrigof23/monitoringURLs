import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { sendUrl, listUrls } from './actions';
import { makeSelectUrlSended, makeSelectUrls } from './selectors';
import reducer from './reducer';
import saga from './saga';
import LinksPage from './LinksPage';

const mapDispatchToProps = (dispatch) => ({
  sendUrl: (url) => dispatch(sendUrl(url)),
  listUrls: () => dispatch(listUrls())
});

const mapStateToProps = createStructuredSelector({
  urlSended: makeSelectUrlSended(),
  urls: makeSelectUrls()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'links', reducer });
const withSaga = injectSaga({ key: 'links', saga });

export default compose(withReducer, withSaga, withConnect)(LinksPage);
export { mapDispatchToProps };
