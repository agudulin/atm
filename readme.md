# ATM

> The Number26 ATM challenge

A small web based prototype of an ATM.

It is built on JavaScript using [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux). It is developed with [webpack](https://github.com/webpack/webpack) and [postcss](https://github.com/postcss/postcss).

![Screenshot](/screenshot.png)

## Quick start

1. Clone this repo using `git clone git@github.com:agudulin/atm.git`
1. Run `npm install` to install dependencies
1. Run `npm start` to see the app at `http://localhost:8080`.

## Project structure

```js
├── server.js               // webpack dev server with hot reloading
├── webpack.config.js       // config file for webpack
└── src
    ├── app                 // main SPA container
    │   ├── index.css
    │   └── index.js
    ├── common
    │   ├── general         // general redux state
    │   │   ├── actions.js
    │   │   ├── reducer.js  // initial state description and state's reducers
    │   │   └── steps.js    // reusable string constants
    │   └── reducer.js      // combination of all possible reducers
    ├── components          // small parts of the app
    │   ├── error-pane
    │   ├── footer
    │   ├── header
    │   └── screens
    │       ├── enter-pin
    │       ├── goodbye
    │       ├── withdrawal
    │       └── withdrawal-other-amount
    └── index.js            // entry point of the app, mounts the app to DOM
```

## Implementation details

1. ATM works as a state machine. That's why I decided to use React for this application: it thinks of UIs as simple state machines.
1. Redux helps to operate with the state using simple pure functions.
1. All components except one (`<App />`) are stateless.

## Possible improvements

1. Add a production config with hot reloading disabled, minification enabled, and styles exctracted.
1. Use [dumb-bem](https://github.com/agudulin/dumb-bem) to produce atomic reusable components.
1. Use [immutable](https://github.com/facebook/immutable-js/) to be sure the state is an immutable structure.

## License

MIT © [Alexander Gudulin](http://gudulin.com)
