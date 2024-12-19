
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchTodoMiddleware } from './middlewares/middlewares';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(fetchTodoMiddleware)));

export default store;