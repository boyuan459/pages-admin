import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const middlewares = [ thunk, sagaMiddleware ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function configureStore(initState) {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(rootSaga)
  return store
}

const store = configureStore()

export {
  history,
  store,
}
