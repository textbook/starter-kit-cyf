CYF Mentor Feedback
===========

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

 - [x] Full stack ES8+ with [Babel]
 - [x] [Express] server
 - [x] [React] client with [Webpack]
 - [x] Linting with [ESLint]
 - [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
 - [x] Production build (single deployment artifact, React loaded via CDN)
 - [x] [Heroku] deployment

Setup
-----

Pick one member of the team to own the repository and pipeline. That person should do the following:

 1. Create a fork of this repository for the team, and rename it something appropriate for your project.
 2. Click the "Deploy to Heroku" button and create a Heroku account when prompted.
 3. Fill in the name of the application, select Europe and then click "Deploy App". Note the MongoDB add-on; this will
    create and link a database for you.
 4. Once it has deployed successfully, click the "Manage app" button to view the application details.
 5. Go to the "Deploy" tab, select "Connect to GitHub" and choose your repo.
 6. Click "Enable automatic deploys".

Whenever you commit to master (or e.g. merge a [pull request]) it will get automatically deployed!

You should now make sure all of the project team are [collaborators] on the repository.

Scripts
-------

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

 - `npm run dev`: starts the frontend and backend in dev mode, with file watching and hot reloading.
 - `npm run lint`: runs ESLint against all the JavaScript in the project.
 - `npm run serve`: builds and starts the app in production mode.

When either `dev` or `serve` is running you can view your app at http://localhost:3000. There is a slight difference
in what's happening in the background, but you don't need to worry about that.


  [Babel]: https://babeljs.io/
  [collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
  [ESLint]: https://eslint.org/
  [Express]: https://expressjs.com/
  [Heroku]: https://www.heroku.com/
  [Node]: https://nodejs.org/en/
  [pull request]: https://help.github.com/en/articles/about-pull-requests
  [React]: https://reactjs.org/
  [Webpack]: https://webpack.js.org/
