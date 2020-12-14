import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  user: null,
};

export const { Types, Creators } = createActions({
  setUser: ['user'],
  logout: null,
});

const setUser = (state, { user }) => ({
  ...state,
  user,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
});

export default Creators;
