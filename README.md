
# RPE-tracker

RPE-tracker is a full-stack web application designed to help sports organizations, coaches, and athletes track and manage Rate of Perceived Exertion (RPE) data for training sessions. The project features a modern React frontend and a robust Node.js/Express backend, with MongoDB for data storage and JWT-based authentication.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication and role management (admin, coach, player)
- Dashboard views for clubs, teams, users, RPE, and training data
- CRUD operations for clubs, teams, trainings, and RPE entries
- Responsive UI with React, Redux, and Bootstrap
- RESTful API with Express and MongoDB (Mongoose)
- JWT-based authentication and session management
- Modular, scalable codebase

## Architecture
```
Client (React, Redux, Bootstrap)
	|
	|  REST API (Axios)
	v
Server (Node.js, Express, Passport, JWT)
	|
	|  ODM
	v
Database (MongoDB via Mongoose)
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)
- MongoDB instance (local or cloud)

### Installation
1. **Clone the repository:**
	```sh
	git clone https://github.com/PedroGF45/RPE-tracker.git
	cd RPE-tracker
	```
2. **Install server dependencies:**
	```sh
	cd server
	npm install
	```
3. **Install client dependencies:**
	```sh
	cd ../client
	npm install
	```
4. **Configure environment variables:**
	- Create a `.env` file in the `server` directory with the following:
	  ```env
	  PORT=5000
	  MONGO_URI=your_mongodb_connection_string
	  SECRET=your_jwt_secret
	  ```
5. **Run the application:**
	- In the project root, run:
	  ```sh
	  cd server
	  npm run dev
	  ```
	- This will start both the backend and frontend concurrently.

## Project Structure
```
RPE-tracker/
├── client/         # React frontend
│   ├── public/
│   ├── src/
│   │   ├── actions/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── reducers/
│   │   ├── routes/
│   │   └── store.js
│   └── package.json
├── server/         # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
└── README.md
```

## API Endpoints
The backend exposes several RESTful endpoints (see `server/routes/apiRoute.js`):

- `GET /api/getUsers` — List all users
- `GET /api/getTeams` — List all teams
- `GET /api/getTeamEnums` — List team level enums
- `GET /api/getClubs` — List all clubs
- `POST /api/club` — Create a new club
- `POST /api/team` — Create a new team
- `POST /api/training` — Create a new training
- `POST /api/rpe` — Create a new RPE entry
- `GET /api/getUserRole` — Get current user role
- `GET /api/getToken` — Get current JWT token

## Usage

1. **Register a new user** or login with existing credentials.
2. **Navigate the dashboard** to manage clubs, teams, trainings, and RPE data.
3. **Admins** can manage users, clubs, and teams. **Coaches** and **players** have access based on their roles.
4. **Track RPE** for each training session and analyze data via dashboards.

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License
ISC License. See [LICENSE](LICENSE) for details.
