//Action types
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";

//Action Creators
export const UserLogin = (user) => ({
  type: USER_LOGIN,
  payload: {
    user,
  },
});

export const UserLogout = () => ({
  type: USER_LOGOUT,
  payload: {},
});

//Reducer
export default function authReducer(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
