# ride-me

## An application for users to book a ride of a car

#### npm commands to run

- use npm start to run both client and server, (not implemented yet).
- use npm run client to run client only, (not implemented yet).
- use npm run server to run server only. (ready to use).

## sample user data for testing db

## user endpoints

- create new user => POST => http://localhost/api/users/
- view all users => GET => http://localhost/api/users/
- login already created user => POST => http://localhost/api/users/login
- add cars for owner => POST => http://localhost/api/users/:userId/owner/:ownerId/cars
- view all cars of owner => GET => http://localhost/api/users/:userId/owner/:ownerId/cars
