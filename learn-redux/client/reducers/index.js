// pull separate reducers together in one root reducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

//make them into one

const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;
