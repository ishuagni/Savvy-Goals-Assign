/**
 * API utilities for
 * fetch requests to be made
 */
import Axios from 'axios';
// import moment from 'moment';

// HTTP instance
// Inject backend URL when to connect with real backend
const HttpInstance = Axios.create({
  baseURL: 'http://localhost:3001',
});

// Get config
function getConfig() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
  };
}

// Set auth token
export function setToken(token) {
  localStorage.setItem('token', token);
}

// remove auth token
export function removeToken() {
  localStorage.clear();
}

// check for authentication
export function isAuthenticated() {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
}

// login using email ID and password
export function login(username, pass) {
  return HttpInstance.post(
    '/auth/login',
    {
      email: username,
      password: pass,
    },
  );
}

// Create User
export function createUser(name, email, password) {
  return HttpInstance.post(
    '/auth/signup',
    {
      name: name,
      email: email,
      password: password
    },
    getConfig()
  );
}

// Create Goal
export function createGoal(goal) {
  return HttpInstance.post(
    '/goals',
    {
      name: goal.name,
      description: goal.description,
      amount: goal.amount,
      goal_target_date: goal.targetDate
    },
    getConfig()
  );
}

// Update Goal
export function updateGoal(goal) {
  return HttpInstance.put(
    `/goals/${goal.id}`,
    {
      name: goal.name,
      description: goal.description,
      amount: goal.amount,
      goal_target_date: goal.targetDate
    },
    getConfig()
  );
}

// Delete Goal
export function deleteGoal(goalId) {
  return HttpInstance.delete(
    `/goals/${goalId}`,
    getConfig()
  );
}

// get all Goals details
export function getGoals() {
  return HttpInstance.get('/goals', getConfig());
}
