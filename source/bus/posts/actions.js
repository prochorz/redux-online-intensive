import { types } from './types';

//INSTRUMENT
import {api} from '../../REST';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type: types.FILL_POSTS,
            payload: posts
        }
    },
    createPost: (posts) => {
        return {
            type: types.CREATE_POST,
            payload: posts
        }
    },
    fetchPostsAsync: (dispatch) => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },
    createPostAsync: (comment) =>  {
        return {
            type: types.CREATE_POST_ASYNC,
            payload: comment
        };
    }
};