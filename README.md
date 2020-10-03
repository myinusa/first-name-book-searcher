# 📚 Oliver Twist Name searcher

> Input a name and see if it’s in Oliver Twist

## Getting Started

`git clone`

`cd first-name-book-searcher`

`npm install`

`npm run start` - This will start the application and run on port 3001

Visit `http://localhost:3001/name-count/:name`

> _Example:_ http://localhost:3001/name-count/Oliver

```
[
    {
        "name": "Martin",
        "total": 1
    }
]
```

Run `node /script/count.js` to write a file `resources/sorted-names.json` that outputs the number of occurrences from firstName.txt in Oliver-twist.txt extract

```
[
  { name: 'Oliver', total: 437 },
  { name: 'Noah', total: 46 },
  { name: 'Rose', total: 46 },
  { name: 'Charley', total: 42 }
  ...
]
```

## Project Structure

| Name                                 | Description                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| server/index.ts                      | Application entry point                                                      |
| server/server.ts                     | Initialization of server                                                     |
| server/controllers/name-countCtrl.js | Handles request for name count                                               |
| server/routes/name-count.js          | Defines /name-count endpoint                                                 |
| server/routes/routes.ts              | Application routes / endpoints                                               |
| script/count.js                      | Outputs number of occurrences from firstName.txt in Oliver-twist.txt extract |
| resources/first-names.txt            | List of first names                                                          |
| resources/oliver-twist.txt           | Oliver twist book                                                            |
|                                      |                                                                              |

## Dependencies

| List of Dependencies             | Description                                                                                                                                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body-parser                      | Node.js body parsing middleware.                                                                                                                                                                                                                        |
| cors                             | CORS is a node.js package for providing a [Connect](http://www.senchalabs.org/connect/)/[Express](http://expressjs.com/) middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options. |
| express                          | Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).                                                                                                                                                                            |
| nodemon                          | helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected                                                                                                               |
| @typescript-eslint/parser        | An ESLint parser which leverages [TypeScript ESTree](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/typescript-estree) to allow for ESLint to lint TypeScript source code.                                                 |
| @typescript-eslint/eslint-plugin | An ESLint plugin which provides lint rules for TypeScript codebases.                                                                                                                                                                                    |
| @types/express                   | This package contains type definitions for Express (http://expressjs.com).                                                                                                                                                                              |
| typescript                       | [TypeScript](http://www.typescriptlang.org) is a superset of JavaScript which primarily provides optional static typing, classes and interfaces.                                                                                                        |
| tslint                           | TSLint is an extensible static analysis tool that checks [TypeScript](https://github.com/Microsoft/TypeScript) code for readability, maintainability, and functionality errors.                                                                         |

## Documentation

### IMPORT WITH POSTMAN

Download the postman collection to test the endpoints in postman - located in `resources/postman`

### Database

The data is stored under `/resources/` . Using the node library `fs` we read the file before parsing in JSON.

### Endpoint

| Endpoint                | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `GET /name-count/:name` | returns number of occurrences by query of name |
