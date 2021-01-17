import {combineReducers, createStore} from 'redux';

import {goalReducer} from './goal/reducers';

// Combine all reducers to be injected into redux store
const rootReducer = combineReducers({
  goal: goalReducer,
});

export default function configureStore() {
  return createStore(rootReducer);
}
