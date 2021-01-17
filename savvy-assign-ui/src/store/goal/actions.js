import {
    SET_GOAL,
  } from './types';
  
  // Action for setting goal data for user
  export function setGoal(goal) {
    return {
      type: SET_GOAL,
      payload: goal,
    };
  }
  