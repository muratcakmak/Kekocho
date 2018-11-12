import * as SessionApiUtil from '../api/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const signup = user => dispatch => SessionApiUtil.signup(user).then(
  user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors)),
);


export const login = user => dispatch => SessionApiUtil.login(user).then(
  user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors)),
);

export const logout = () => dispatch => SessionApiUtil.logout().then(
  () => dispatch(receiveCurrentUser(null)),
  errors => dispatch(receiveErrors(errors)),
);
