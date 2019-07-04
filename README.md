# ride-me

## An application for users to book a ride of a car

#### npm commands to run

- use npm start to run both client and server.
- use npm run client to run client only.
- use npm run server to run server only.

## sample user data for testing db

## Admin endpoints

- view all owners => GET => /api/admin/owners
- view all users => GET => /api/admin/users/

## User endpoints

- create new user => Register New User => POST => /api/users/
- view single user => GET => /api/users/:userId

## Auth endpoints

- login already created user => POST => /api/users/auth/login
- register a new user => POST => /api/users/auth/signup

### Owner endpoints

- create owner => specify userType in user body as owner => POST => /api/users/
- view single owner => GET => /api/users/:userId/owner/:ownerId
- update profile of an owner
- delete single owner => DELETE => /api/users/:userId/owner/:ownerId

### Customer endpoints

- view all customers
- create single customer
- view single cuctomer
- update customer's profile
- delete single customer

## Car endpoints

- view all cars of the specific owner => GET => /api/users/:userId/owner/:ownerId/cars
- add cars for owner => POST => /api/users/:userId/owner/:ownerId/cars
- view single car detail => GET => /api/users/:userId/owner/:ownerId/cars/:carId
- edit single car => PUT => /api/users/:userId/owner/:ownerId/cars/:carId
- delete single car => DELETE => /api/users/:userId/owner/:ownerId/cars/:carId

## Booking endpoints

- view all bookings
- create booking
- view single booking
- update booking
- delete booking
