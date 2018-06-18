# node-projects

This repository is used to store code for tasks and projects form different courses and tutorials about node.js.

## History of the projects I've worked on.

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
