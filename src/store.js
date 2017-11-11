import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist'
const logger = createLogger({})

let middleware = applyMiddleware(thunkMiddleware, logger)
const store = createStore(
  reducer,
  compose(middleware, autoRehydrate())
)

persistStore(store)

export default store;
