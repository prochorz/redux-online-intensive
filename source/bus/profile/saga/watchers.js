//core
import {takeEvery, all, call} from 'redux-saga/effects';

//Types
import {types} from '../types';

//workers
import {workers} from './workers';

function* watchWorker() {
    yield takeEvery(types.TYPE, worker)
}

export function* watchDomain () {
    yield all([call(watchWorker)]);
}