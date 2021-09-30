# Dashboards
An app made with Express, React and Typescript that displays a dashboard from API data.
A Storybook is created to show all the components style.

## Menu
[Requirement](#requirement)

[Quick Start](#quick-start)

[Note](#note)

[All commands](#all-commands)


## Requirement

````
Generate front-end page
Conceive an elegant and well performing way of presenting the provided data to the end-user.
• Code quality matters
• Please document well; preferably in Markdown
• Testability is important
• Fetch data from the provided backend
• Containerize your solution; use Docker
• Heavily suggested: TypeScript, React
````

## Quick Start

### Using Docker-compose (API & App)

```
docker-compose up
```


/!\ It might take few minutes to start because of the `npm i` command and the `webpack` build for front-end app and storybook. /!\

App will be accessible by default on port `4000` and storybook on port `6006`.

Both `storybook` and `app` ports are set in environment variables, if you want to change the ports, you can use the variables `${PORT}` and `${STORYBOOK_PORT}`, for example :

```
 PORT_STORYBOOK=1224 PORT=1223 docker-compose up
```

### Running app locally (API & App)

---

1- Start the API using `uvicorn backend.main:app --host 0.0.0.0 --port 8010 --reload` or `docker-compose up backend` (to start only the API docker container)

2- Make sure Node 16.3.0 & npm are installed

3- Install dependencies using `npm i`

4- Start the App using `npm start`

---

If you are using [avn](https://www.npmjs.com/package/avn), there is a `node-version` file that
will automatically set your node version to 16.3.0

## Note

### Dashboard

This App is composed of a back-end and a front-end.

*(We will not be talking about the API in this note since the API has been provided and could be replaced)*

#### Technical choices

I choose to create a "full-stack" application in order to have more control of the data received from the API. For this reason,
I wrote a server using [NodeJs](https://nodejs.org/en/) and [Express](https://expressjs.com/).
This server will be used as a proxy to call the provided API and expose routes with the API response in order to handle the
[CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS/Errors) policy.
The server will also serve the built front-end on the main route `'/'`.

For the front-end, I choose to create a [React](https://fr.reactjs.org/) application, built with [Webpack](https://webpack.js.org/). This application
has its own routes created with [React-router](https://reactrouter.com/). All the components style is made with [Styled-components](https://styled-components.com/)
and exposed with [Storybook](https://storybook.js.org/).

The back-end and the front-end are written in [Typescript](https://www.typescriptlang.org/) and tested using [Jest](https://jestjs.io/fr/)
and [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

[Prettier](https://prettier.io/) and [Eslint](https://eslint.org/) are used in the project to respect some code quality rules.

The App have 2 routes :
- '/' that displays all the devices information
- '/device/:id' that displays a specific device information
  In this page, I choose to create a chart that simulates voltage data "in real time". There is a re-fetch call every 5 seconds 
  so the chart line is updated with a new value. Since the API only returns a fix value, the component use a `Math.random` method
  to mock what could be a real voltage data. It allows user to monitor the voltage of a specific device in real time. 
  The live chart can be started and stopped at any time.


#### Possible improvement

- For timing reason I decided not to make this application responsive.
- For timing reason I decided to make more efforts on the technical side than on the design.
- I choose to use a simple front-end cache to avoid recalling API when the data has already been fetched but this
  strategy will not work if we want to get fresh data in real-time or every x time. A more sophisticated cache strategy will
  be needed to handle any data refresh.
- I choose to use the global fetch method to call the back-end server from the front-end but a more powerful library would be better
  to handle cache, refresh & performance.
- Using yarn instead of npm

#### Architecture and best practices

##### Architecture


The app is built with 2 principal folders : `server` and `src`.
`server` is the express backend and `src` contains everything the frontend needs to work.

* server
  * `test` contains tests files for the Server
  * `types` contains the types required for the Server
* src
  * `components` contains all the components needed for the App. In this project, a "component" is a React component that does not have
    any logic in it. A component can work in different use cases, it does not need a specific context to be used. The provided props are the
    only context they need to be functional.
  * `containers` contains all the containers needed for the App. In this project, a "container" is a React component that needs context, logic,
    state, Api call,... For example, a container can not be used in another project context.
  * `style` contains the style variable and the global style of the application
  * `test-utils` contains mock or set up files to be used in tests
  * `types` contains all the component and data types for Typescript
  * utils` contains methods, helpers, config that would be needed in project
  
For each component | container | utils |..., a folder `tests` contains the tests made with `Jest` and `React-testing-library`.

##### Best practices

This project respect some naming rules for the files :
- A `component` file is named `[ComponentName].component.tsx` and its test `[ComponentName].component.test.tsx`
- A `container` file is named `[ContainerName].container.tsx` and its test `[ComponentName].container.test.tsx`
- A component|container style file is named `[componentName].style.tsx`
- A component|container utils file is named `[componentName].utils.tsx`
- A component|container story file is named `[componentName].story.tsx` and be placed in a `stories` file

Each container | component have an `index.ts` file to make imports easier.

The graphic assets (colors, spaces, etc) are referenced in the `styles/variables.ts` file. 

The style for each component is made with `styled-component`.

Each component, some containers, and basic style assets are exposed in Storybook in order to have a reference of the design to create the design system
of the App.

## All commands

### Start

---

- `start` : use `per-env` to call either `start:development` or `start:production` depending on the variable `NODE_ENV`. By default
  this variable is set to `development`. App will be accessible on port 4000.
- `start:development`: start the express server with hot reload and serve the front-end also with hot reload.
- `start:production`: build the front-end, start express server and serve the front-end in production mode.
- `start-front`: use `per-env` to call either `start-front:development` or `start-front:production`
- `start-front:development`: start the front-end with `webpack` and hot-realod
- `start-front:production`: build and start the front-end with `webpack`, no hot-realod

---

### Build

---

- `build`: build the app : back-end with `tsc` and front-end with `webpack`
- `build:front`: build only the front-end with `webpack`
- `build:server`: build only the back-end with `tsc`

---

### Test

---

- `test` : run tests for back-end and front-end
- `test:update`: run tests for back-end and front-end and update snapshots
- `cover`: run tests and check coverage thresholds

---

### Lint & prettier

---

- `lint` : use `eslint` to check linting
- `lint:fix`: use `eslint` to fix linting issues
- `prettier:fix` : use `prettier` to beautify code

---

### Storybook

---

- `storybook` : start `storybook` on port 6006
- `storybook:build` : build `storybook` static assets

---
