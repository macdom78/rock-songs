# Rock Songs

## Project Overview

[Rock Songs](https://protected-springs-68967.herokuapp.com) is a small project that serves the top 50 Rock songs from the [iTunes Api](https://itunes.apple.com/search?term=rock&media=music).<br />

It is built using [create-react-app](https://create-react-app.dev/docs/getting-started/). It utilises the redux pattern as a global state holder for the results returned from iTunes Api.

## Quick Links

- [Production](#production)
- [Technology Used](#technology-used)
- [Helpful Scripts](#helpful-scripts)
- [Testing](#testing)
- [Future Improvement](#future-improvements)

## Production

Rock songs is hosted on Heroku [here](https://protected-springs-68967.herokuapp.com)

## Technology Used

- react v16.13.0
- react-dom v16.13.0
- redux v4.0.5
- react-redux v7.2.0
- redux-persist v6.0.0
- [reach-router](https://reach.tech/router) v1.3.3
- [emotion](https://emotion.sh/docs/introduction) v10.0.27

## Helpful Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run test:coverage`

Runs all test files and returns a coverage report.<br />
Coverage threshold can be found [here](https://github.com/macdom78/rock-songs/blob/master/package.json#L63)

### `npm run build`

Builds the app for production to the `build` folder.<br />

### `npm run storybook`

Runs [storybook](https://storybook.js.org/docs/basics/introduction/) in development mode.<br />
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br />

### `npm run build-storybook`

Builds storybook for production to the `storybook-static` folder.<br />

## Testing

The following approach has been taken for testing the application:

- React testing library is used for unit testing all components.
- Snapshot testing used to test all the Storybook stories in the application.
- Coverage requirements set at 90% across the board - coverage can be seen by running `npm run test:coverage`

## Future Improvements

The following is a list of desired improvements/enhancements:

- Improve UI and have an enhanced UX.
- Introduce more a11y features / make sure is as accessible as possible.
- Add option to search for different terms.
- Add in CI/[Chromatic](https://www.chromaticqa.com/) to check for any changes to Storybook.
