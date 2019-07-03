# ride-me

## An application for users to book a ride of a car

#### npm commands to run

- use npm start to run both client and server.
- use npm run client to run client only.
- use npm run server to run server only.

## sample user data for testing db

## user endpoints

- create new user => Register New User => POST => http://localhost:5000/api/users/
- view all users => GET => http://localhost:5000/api/users/
- view single user => GET => http://localhost:5000/api/users/:userId
- login already created user => POST => http://localhost:5000/api/users/login

### owner endpoints

- create owner => specify userType in user body as owner => POST => http://localhost:5000/api/users/
- view single owner => GET => http://localhost:5000/api/users/:userId/owner/:ownerId
- delete single owner => DELETE => http://localhost:5000/api/users/:userId/owner/:ownerId

## car endpoints

- view all cars of the specific owner => GET => http://localhost:5000/api/users/:userId/owner/:ownerId/cars
- add cars for owner => POST => http://localhost:5000/api/users/:userId/owner/:ownerId/cars
- view single car detail => GET => http://localhost:5000/api/users/:userId/owner/:ownerId/cars/:carId
- edit single car => PUT => http://localhost:5000/api/users/:userId/owner/:ownerId/cars/:carId
- delete single car => DELETE => http://localhost:5000/api/users/:userId/owner/:ownerId/cars/:carId
