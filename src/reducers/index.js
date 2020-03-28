import { RSS_FEED_REQUEST, RSS_FEED_SUCCESS, RSS_FEED_FAILURE } from '../actions';

export const initialState = {
  loading: false,
  error: '',
  rss: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RSS_FEED_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RSS_FEED_SUCCESS:
      console.log('action', action);
      return {
        ...state,
        loading: false,
      };

    case RSS_FEED_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
