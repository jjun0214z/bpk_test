import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const env = process.env.NODE_ENV;
const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

if(env === "development"){
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const reducer = combineReducers({
    router: connectRouter(history),
});

let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export { history };
export default store();