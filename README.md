# Music Player Backend

This is the backend for a music player application built with Node.js, Express, and MongoDB.

## Features

- User authentication (register and login)
- JWT-based authentication
- Logging with Winston

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file and set your MongoDB URI and JWT secret
4. Run `npm run dev` to start the server

## Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login an existing user