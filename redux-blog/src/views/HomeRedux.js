import { combineReducers } from 'redux';

import list, { loadArticles } from '../components/Home';

export default combineReducers({
    list,
});

export const actions = {
    loadArticles,
}