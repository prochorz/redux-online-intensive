//Core
import { all, call } from 'redux-saga/effects';

//Watcher
import { watchPosts } from '../bus/posts/saga/watchers';
import { watchAuth } from '../bus/auth/saga/watchers';
import { watchUsers } from '../bus/users/saga/watchers';

export function* rootSage () {
    yield all([call(watchPosts), call(watchAuth ), call(watchUsers)]);
}