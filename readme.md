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
    │   │   └── steps.js
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

## License

MIT © [Alexander Gudulin](http://gudulin.com)
