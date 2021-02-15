import { combineReducers } from 'redux';
import repositoryReducers from './repositoriesReducer';

const reducers = combineReducers({
    repositories: repositoryReducers
});

export default reducers;