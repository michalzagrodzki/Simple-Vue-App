# Vie Simple App


This project is simple app showing how to use Vue. Few templates, fetching data from local file and presenting it through lists and single views.

## Getting Started

Please follow instructions to setup your environment, install app locally, develop it locally, test, build and finally deploy it.

### Prerequisites

You need to have installed `node.js` and `yarn` on your machine to make this app work. 
We recommend using `LTS` version of node.


macOS:

Install node.js:
```
brew install node@10
```

Install yarn:
```
brew install yarn
```


Windows:

Install node.js on Windows:

Instal Chocolatey - this is package managing tool, it will help you with installing node.js 
```
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object wet.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```
Install node.js:
```
choco install nodejs-lts
```

Install yarn:
```
choco install yarn
```

Check versions of installed node.js and yarn
```
node -v && yarn -v
```

### Installing

Two step guide which show you how to install and run app.


Install all dependencies for this project
```
yarn install
```

Start development version of app
```
yarn run serve
```

Application is served through following links:

- Local machine: `http://localhost:8080/`

- Local network: `http://192.168.1.178:8080/`

## Running the tests

Tests and lints will be run in pipeline before deploying. Please run them, before deploying to avoid failure in pipeline.

### Unit tests

These tests run through all components in app:
```
yarn run test
```

### Code lint

These tests will lint (show) any errors in your code:
```
yarn run lint
```

## Build and check size of app

When you build your app, you will be shown graph analysis with diagram presenting all dependencies and their sizes. This is useful in investigating performance and size of app.
```
yarn run build
```


## Built With

* [Vuejs](https://vuejs.org/) - Library for interactive web interfaces.
* [Vue Router](https://router.vuejs.org/) - Library for managing routes in vuejs applications.
* [Superagent](https://visionmedia.github.io/superagent/) - Light-weight progressive ajax API for browsers.
* [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management.
* [Jest](https://yarnpkg.com/lang/en/) - Testing framework.

## Authors

* **Michal Zagrodzki** - *Lead developer*

