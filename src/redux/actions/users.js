export const actionTypes = {
  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE',
  TOGGLE_LIKE: 'TOGGLE_LIKE',
  EDIT_USER: 'EDIT_USER',
  DELETE_USER: 'DELETE_USER'
};

export const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = (error) => ({
  type: actionTypes.FETCH_USERS_FAILURE,
  payload: { error }
});

export const toggleLike = (id) => ({
  type: actionTypes.TOGGLE_LIKE,
  payload: id
});

export const editUser = (user) => {
  return {
    type: actionTypes.EDIT_USER,
    payload: user
  };
};

export const deleteUser = (id) => ({
  type: actionTypes.DELETE_USER,
  payload: id
});
