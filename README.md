# node-projects

This repository is used to store code for tasks and projects form different courses and tutorials about node.js.

## History of the projects I've worked on.

#### 24.07.2018
Async-await is a project that I used to better understand this functionality.

#### 19.07.2018
Chat app is a project using socket.io for creating a realtime chat web-app. You can create rooms and have private conversations. You can also send your location as a message.

__To download dependencies:__ `npm install`

__To run go to:__ /chat-app - `node server/server.js`

The app will run on `localhost:3000`.

It is also deployed on [heroku](https://radiant-gorge-47143.herokuapp.com/).

---

#### 04.07.2018
Setting up a project with mongodb. This project is a REST todo-api which can add, update, and delete todos. An authentication system is also implemented so to be able to perform these operations you have to create a user first.

__To download dependencies:__ `npm install`

__To run go to:__ /todo-api - `node server.js`

Using postman you can go to `localhost:3000/todos` and make a `POST` request to create a note.

---
#### 23.06.2018
Working with Mocha for testing functions.

__To download dependencies:__ `npm install`

__To run go to:__ /tests - `npm start`

---

#### 19.06.2018
Web server that is deployed on heroku. Only for testing purposes. The projects main purpose is to better understand templating and express.

__To download dependencies:__ `npm install`

__To run go to:__ /web-server - `node server.js`

The default server is running on `localhost:3000`.

---

#### 17.06.2018
Weather application that uses Google's API for fetching the longitude and altitude based on user input.

__To download dependencies:__ `npm install`

__To run go to:__ /weather-app - `node app.js [args]`

The only `[args]` that the program takes is location. For example `node app.js -a "SOME ADDRESS"` (note: the address must be in quotes).

For more information run `node app.js --help`

The app uses Dark Sky API for weather information so in order to use it you must register for their api and createa file called `key.js` inside `/weather-app` and declare a `const = "YOUR KEY"`.

---

#### 15.06.2018
Note taking application.

__To download dependencies:__ `npm install`

__To run go to:__ /notes-node - `node app.js [args] [optional flags]`

Where `[args]` defines what action you want to do. You can choose between add, list, read, and remove. You can use `[optional flags]` with add, read, and remove. Every note has a title and body. For example, to add a note `node app.js add --title="My Title" --body="Important body"`. To remove and read a note you have to only specify the title. `list` argument will list all notes.

For more information run `node app.js --help`

---
#### 14.06.2018
Simple hello world application.

__To run go to:__ /hello-world - `node app.js`
