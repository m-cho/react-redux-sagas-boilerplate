import { call, put, take } from 'redux-saga/effects';
import TestActions, { TestTypes } from '../Redux/TestRedux';

function pingRequest () {
  return fetch('https://swapi.co/api/', {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => resp.json());
}

function* testSaga () {
  while (true) {
    yield take(TestTypes.PING_REQUEST);

    try {
      const data = yield call(pingRequest);
      yield put(TestActions.pingSuccess(data));
    } catch (err) {
      yield put(TestActions.pingFailure(err));
    }
  }
}

export default [
  testSaga
];