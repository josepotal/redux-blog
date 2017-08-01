import axios from 'axios';
import database from '../database';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/'
const API_KEY = '?key=JOSEPOTAL1234'


// fetch data from FIREBASE!! using redux-think

export function fetchPosts() {
  return dispatch => {
    database.ref('/posts').on('value', snap => {
      const posts = snap.val();
      console.log(posts)
      dispatch ({
        type: FETCH_POSTS,
        payload: posts
      });
    })
  }
}



export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
 const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  
  return {
    type: FETCH_POST,
    payload: request
  } 
}

export function deletePost(id, callback) {
 const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  } 
}