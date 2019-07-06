Starter Kit
===========

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

 - [x] Full stack ES8+ with [Babel]
 - [x] [Express] server
 - [x] [React] client with [Webpack]
 - [x] Linting with [ESLint]
 - [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
 - [x] Production build (single deployment artifact, React loaded via CDN)
 - [x] [Travis] pipeline
 - [x] [Heroku] deployment

Setup
-----

Pick one member of the team to own the repository and pipeline. That person should do the following:

 1. Create a fork of this repository for the team, and rename it something appropriate for your project.
 2. Create an account on [Heroku].
 3. Create a new application (New -> Create new app), enter an appropriate and available name and update the `app:` in
    `.travis.yml` to match the name.
 4. Add a MongoDB add on (Resources -> Add-ons -> mLab MongoDB -> Sandbox).
 5. Note down your API token (Account settings -> API Key).
 6. Log in to [Travis] using your GitHub credentials.
 7. Go to the repo list (Settings -> Repositories) and "tick" your repo to enable builds
 8. Go to the settings for your fork (Repo name -> Settings) and set an environment variable named `HEROKU_API_KEY`
    with the value from step 5. **Do not** tick "display value in build log"; this is a secret.
 9. Commit and push the change you made to `.travis.yml`.

This push should trigger a Travis build, which will deploy to Heroku!

You should now make sure all of the project team are [collaborators] on the repository.

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
  [collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
  [CRA]: https://facebook.github.io/create-react-app/
  [ESLint]: https://eslint.org/
  [Express]: https://expressjs.com/
  [Heroku]: https://www.heroku.com/
  [Node]: https://nodejs.org/en/
  [React]: https://reactjs.org/
  [starter kit]: https://github.com/textbook/cyf-app-starter
  [Travis]: https://travis-ci.org/
  [Webpack]: https://webpack.js.org/
