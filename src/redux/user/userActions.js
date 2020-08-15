import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './userTypes';
import Axios from 'axios';

const fetchUserRequest = () => {
  console.log('inside fetchuserrrequest');
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
