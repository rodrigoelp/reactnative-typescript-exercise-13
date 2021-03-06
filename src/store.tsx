import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { countReducer, rootNavigationReducer, secureNavigationReducer } from "./reducers";

/**
 * The store contains the information required by any container in
 * order to maintain the state of the application. In here we will be using
 * some random state reducer (called @see countReducer ) but you will be hooking
 * up the reducer of your choosing.
 * 
 * The object generated by combining the reducers **must** match the definition of
 * @see IAppState as the property names used by the reducer must match the names used
 * by the IAppState.
 * 
 * This store is using:
 *  @see redux-logger
 *  @see redux-thunk
 */
const store = createStore(
    combineReducers({
        currentCount: countReducer,
        rootNavigator: rootNavigationReducer,
        secureNavigationState: secureNavigationReducer,
    }),
    applyMiddleware(logger, thunk));

export { store };