import { actionTypes } from '../actions/users';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  editingUser: null
};

const usersReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case actionTypes.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        users: action?.payload?.users || []
      };
    }

    case actionTypes.FETCH_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action?.payload?.error || null
      };
    }

    case actionTypes.TOGGLE_LIKE: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action?.payload ? { ...user, isLiked: !user.isLiked } : user
        )
      };
    }

    case actionTypes.EDIT_USER: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action?.payload?.id ? { ...user, ...action.payload } : user
        )
      };
    }

    case actionTypes.DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload)
      };
    }

    default:
      return state;
  }
};

export default usersReducers;
