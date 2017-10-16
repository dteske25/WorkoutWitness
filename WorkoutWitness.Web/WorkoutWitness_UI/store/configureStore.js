import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { initialState, rootReducer } from '../reducers';

export default function configureStore(history, state = initialState) {
    const logger = createLogger({collapsed: true});
    const createStoreWithMiddleware = compose(
        applyMiddleware(thunk, logger),
        applyMiddleware(routerMiddleware(history)),
    )(createStore);

    // Instantiate the app-wide store instance
    const store = createStoreWithMiddleware(rootReducer, state);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer.rootReducer);
        });
    }

    return store;
}

