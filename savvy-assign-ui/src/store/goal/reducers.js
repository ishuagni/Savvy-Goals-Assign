import {
  SET_GOAL,
  } from './types';
  
  // Initial State for the goal reducer
  const initialState = {
    goal: {},
  };
  
  // Reducer Action mapping for goal reducer
  export function goalReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case SET_GOAL:
        return {
          ...state,
          goal: action.payload
        };
      default:
        return state;
    }
  }
  