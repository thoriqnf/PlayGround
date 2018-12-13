import { combineReducers } from 'redux';
import postReducers from './postsReducers';

export default combineReducers({
  post: postReducers
});