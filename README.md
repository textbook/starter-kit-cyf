Starter Kit
===========

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

 - [ ] Full stack ES8+ with [Babel]
 - [x] [Node] LTS support (verified working on 6.x, 8.x and 10.x LTS releases)
 - [x] [Express] server
 - [x] [React] client with [Webpack]
 - [x] Linting with [ESLint]
 - [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
 - [x] Production build (single deployment artifact, React loaded via CDN)
 - [x] [Travis] pipeline
 - [x] [Heroku] deployment
 - [x] [Docker] build

Scripts
-------

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

 - `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
    the frontend is proxied to it).
 - `lint`: runs ESLint against all the JavaScript in the project.
 - `serve`: builds and starts the app in production mode locally.

Rationale
---------

Partly I wrote this to explore what things like Create React App ([CRA]) are doing under the hood with Babel and
Webpack. Partly it was to simplify a previous [starter kit], so there aren't multiple package entry points complicating
the automation and it's not using `copy` (which caused cross-platform issues on Windows).

**Pros**

 - A single root ESLint configuration keeps the project's code consistent to minimise context switching
 - Less hidden "magic" config than when using CRA
 - Simpler orchestration with a single NPM entry point

**Cons**

 - The single `package.json` is getting a bit unwieldy; there are 20+ scripts and it's unclear what part of the app
    each dev dependency is for

**To consider**

 - TypeScript?

  [Babel]: https://babeljs.io/
  [CRA]: https://facebook.github.io/create-react-app/
  [Docker]: https://www.docker.com
  [ESLint]: https://eslint.org/
  [Express]: https://expressjs.com/
  [Heroku]: https://www.heroku.com/
  [Node]: https://nodejs.org/en/
  [React]: https://reactjs.org/
  [starter kit]: https://github.com/textbook/cyf-app-starter
  [Travis]: https://travis-ci.org/
  [Webpack]: https://webpack.js.org/
