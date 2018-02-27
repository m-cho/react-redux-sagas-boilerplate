import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { get } from 'lodash';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  pingRequest: null,
  pingSuccess: ['data'],
  pingFailure: ['error'],
});

export const TestTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  data: null,
  error: null
});

/* ------------- Reducers ------------- */
const pingRequest = state => state.merge({ fetching: true, data: null, error: null });
const pingSuccess = (state, { data }) => state.merge({ fetching: false, data, error: null });
const pingFailure = (state, { error }) => state.merge({ fetching: false, data: null, error });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.PING_REQUEST]: pingRequest,
  [Types.PING_SUCCESS]: pingSuccess,
  [Types.PING_FAILURE]: pingFailure
});

export const getPingFetching = state => get(state, 'test.fetching');
export const getPingData = state => get(state, 'test.data');
export const getPingError = state => get(state, 'test.error');
