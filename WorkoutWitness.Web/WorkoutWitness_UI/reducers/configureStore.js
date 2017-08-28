import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './indexReducer';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger({
        collapsed: true,
    })
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
        module.hot.accept('.', () => {
            const nextRootReducer = require('.');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}