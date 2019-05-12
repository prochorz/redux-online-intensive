//Core
import {put, apply} from 'redux-saga/effects';
import { actions } from 'react-redux-form';
import {expectSaga, testSaga} from 'redux-saga-test-plan';

import {api} from '../../../REST';
import {authActions} from '../actions';
import {uiActions} from '../../ui/actions';
import {profileActions} from '../../profile/actions';
import {authenticate} from '../saga/workers';
import { error } from 'util';

describe('authentiate saga:', ()=>{
    test('should complate a 200 status response scenario', async ()=>{
        await expectSaga( authenticate )
              .put(uiActions.startFetching())
              .provide([[apply(api, api.auth.authenticate), __.fetchResponseSuccess]])
              .apply(localStorage, localStorage.setItem, ['token', __.token])
              .put(actions.change('forms.user.profile.firstName', __.userProfile.firstName) )
              .put(actions.change('forms.user.profile.lastName', __.userProfile.lastName) )
              .put(profileActions.fillProfile(__.userProfile))
              .put(authActions.authenticate())
              .put(uiActions.stopFetching())
              .put(authActions.initialize())
              .run();
    });

    test('should complate a 401 status response scenario', async ()=>{
        await expectSaga( authenticate )
              .put(uiActions.startFetching())
              .provide([[apply(api, api.auth.authenticate), __.fetchResponseFail401]])
              .apply( localStorage, localStorage.removeItem, ['token'] )
              .apply( localStorage, localStorage.removeItem, ['remember'] )
              .returns(null)
              .put(uiActions.stopFetching())
              .put(authActions.initialize())
              .run();
    });

    test('should complate a 400 status response scenario', async ()=>{
        await expectSaga( authenticate )
              .put(uiActions.startFetching())
              .provide([[apply(api, api.auth.authenticate), __.fetchResponseFail400]])
              .put(uiActions.emitError(__.error, 'authenticate worker '))
              .put(uiActions.stopFetching())
              .put(authActions.initialize())
              .run();
    });
});