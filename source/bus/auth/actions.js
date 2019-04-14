//Types
import { types } from './types';

export const authActions = {
    authenticate:()=>{
        return {
            type: types.AUTHENTICATE,
        };
    },
    signupAsync:(userDaa)=>{
        return {
            type: types.SIGNUP_ASYNC,
            payload: userDaa
        };
    },
};