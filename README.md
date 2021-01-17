# Savvy-Goals-Assign
Demo project for creating investment goals

## Frontend Deployment
Frontend of this application is built on React and present in savvy-assign-ui folder

## Backend Deployment
Frontend of this application is built on React and present in savvy-assign-ui folder

## Project Information and Coverage

### Frontend / UI
Following screens were created:-
- Login
- Signup
- Dashboard

Login setup JWT Authentication with the APIs and all the API call require this authentication token

Login/Signup Screens:-
- Frontend Validation is added where email, password, name field should not be null, Submit button will remain inactive
- On successfull signup, it will be redirected to login page

Dashboard Screens:-
- Dashboard Screen will list all the goals created by the current logged in user
- User can create new goal, update and delete existing goals.
- Create New Goal, and Update Existing Goal, will open a popup, where all the values need to be specified.
- On Delete, confirmation modal/popup will appear.
- Logout button will delete the token from storage and redirect to Login Screen
- Avatar is also created using user's name initials. Available in Dashboard near logout screen.

### Backend / APIs
Following APIs were created:-
- POST /auth/login
- POST /auth/signup  
- GET /goals
- POST /goal
- PUT /goals/:id
- DELETE /goals/:id

/auth/login setup JWT Authentication using jwt gem

Other Features:-
- Bcrypt is used for encryption and decryption of password
- Seed data is created, including one user and 2 goals for that user
- JWT Authentication is required for all APIs
