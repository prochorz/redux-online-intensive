import {types} from './types';

//INSTRUMENT
import {api} from '../../REST';

export const postsActions = {
  fillPosts: (posts) => {
    return {
      type: types.FILL_POSTS,
      payload: posts
    }
  },
  createPost: (post) => {
    return {
      type: types.CREATE_POST,
      payload: post
    }
  },
  removePost: (postId) => {
    return {
      type: types.REMOVE_POST,
      payload: postId
    }
  },
  likePost: (likePostData) => {
    return {
      type: types.LIKE_POST,
      payload: likePostData
    }
  },
  unlikePost: (likePostData) => {
    return {
      type: types.UNLIKE_POST,
      payload: likePostData
    }
  },

  fetchPostsAsync: () => {
    return {
      type: types.FETCH_POSTS_ASYNC,
    };
  },
  createPostAsync: (comment) => {
    return {
      type: types.CREATE_POST_ASYNC,
      payload: comment
    };
  },
  removePostAsync: (postId) => {
    return {
      type: types.REMOVE_POST_ASYNC,
      payload: postId
    };
  },
  likePostAsync: (postId) => {
    return {
      type: types.LIKE_POST_ASYNC,
      payload: postId
    };
  },
  unlikePostAsync: (postId) => {
    return {
      type: types.UNLIKE_POST_ASYNC,
      payload: postId
    };
  },
};