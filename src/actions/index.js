import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Api from '../api';

export const RSS_FEED_REQUEST = 'RSS_FEED_REQUEST';
export const RSS_FEED_SUCCESS = 'RSS_FEED_SUCCESS';
export const RSS_FEED_FAILURE = 'RSS_FEED_FAILURE';

export const getRssFeedRequest = () => async dispatch => {
  dispatch({ type: RSS_FEED_REQUEST });
  try {
    const data = await Api.getRssFeed();
    dispatch({ type: RSS_FEED_SUCCESS, data });
  } catch (error) {
    // const errorMessage =
    //   messages['/notification-center'].DELETE[JSON.stringify(error.response.status)];
    const customError = new Error(error);
    dispatch({ type: RSS_FEED_FAILURE, error });
    throw customError;
  }
};

export function withApp(mapStateToProps, mapDispatchToProps) {
  const mapStateToPropsWithApp = state => ({
    ...(mapStateToProps ? mapStateToProps(state) : {}),
  });
  const mapDispatchToPropsWithApp = dispatch =>
    bindActionCreators(
      {
        ...(mapDispatchToProps || {}),
      },
      dispatch,
    );
  return connect(
    mapStateToPropsWithApp,
    mapDispatchToPropsWithApp,
  );
}
