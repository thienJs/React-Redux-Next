import { ADD_POST, GET_POSTS, GET_POST, CLEAR_POST } from './types';
import post from '../../services/api/posts';

export const addPost = post => ({
  type: ADD_POST,
  payload: post
});

export const clearCurrentPost = () => ({ type: CLEAR_POST });

export const getPosts = () => async dispatch => {
  try {
    const res = await post.get('/posts');
    const data = await res.data;

    dispatch({ type: GET_POSTS, payload: data.slice(1, 7) });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = id => async dispatch => {
  try {
    dispatch(clearCurrentPost());
    const res = await post(`/posts/${id}`);
    const data = await res.data;

    dispatch({ type: GET_POST, payload: data });
  } catch (ex) {
    console.log(ex);
  }
};
