import { combineReducers } from 'redux';

import { postsReducer as posts } from '../bus/posts/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { authReducer as auth } from '../bus/auth/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';

export const rootReducer = combineReducers({
    auth,
    profile,
    posts,
    ui
})