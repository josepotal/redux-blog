import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case DELETE_POST:
    //drops the deleted post from state object
    return _.omit(state, action.payload);
  case FETCH_POST: 
  //spread operator {...state} , [id]: data --> key interpolation
    return { ...state, [action.payload.data.id] : action.payload.data }
  // case UPDATE_POST:
  //   return {...state, [action.payload.data.id] : action.payload.data }
  case FETCH_POSTS:
  //transform an array to an object with key 'id'
    return action.payload //_.mapKeys(action.payload, 'id')
  default:
    return state;
  }
}