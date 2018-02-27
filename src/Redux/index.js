import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../Sagas';

export default () => {
  const rootReducer = combineReducers({
    test: require('./TestRedux').reducer,
    router: routerReducer
  });

  const middlewares = [];

  const logger = createLogger({
    collapsed: true,
    diff: true
  });

  middlewares.push(logger);

  const history = createHistory();
  middlewares.push(routerMiddleware(history));

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  sagas.forEach((saga) => sagaMiddleware.run(saga));
  
  return { store, history };
};
