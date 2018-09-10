// import {createStore,combineReducers,compose} from 'redux'
// import {routerReducer} from 'react-router-redux'
import thunk from 'redux-thunk';//引入异步中间件
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import {routerReducer} from 'react-router-redux'
// const reducer = combineReducers({
//     routing: routerReducer
// });
//
// const win = window;
// const storeEnhancers = compose(
//     (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// )
//
// const initialState = {}
//
// export default createStore(reducer,initialState,storeEnhancers);
import resetEnhancer from './enhancer/reset.js'
const originReducers = {
    routing: routerReducer
}
const reducer = combineReducers(originReducers);

const win = window;

const middlewares = []
if (process.env.NODE_ENV != 'production') {
    middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
    resetEnhancer,
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
)

const initialState = {};
const store = createStore(reducer,initialState,storeEnhancers);
store._reducers = originReducers
export default store;