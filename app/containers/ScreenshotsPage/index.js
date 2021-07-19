import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { listScreenshots } from './actions';
import { makeSelectScreenshots } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ScreenshotsPage from './ScreenshotsPage';

const mapDispatchToProps = (dispatch) => ({
  listScreenshots: () => dispatch(listScreenshots())
});

const mapStateToProps = createStructuredSelector({
  screenshots: makeSelectScreenshots()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'screenshots', reducer });
const withSaga = injectSaga({ key: 'screenshots', saga });

export default compose(withReducer, withSaga, withConnect)(ScreenshotsPage);
export { mapDispatchToProps };
