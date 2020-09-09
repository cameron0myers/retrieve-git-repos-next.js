# Next.js redux Demo

An opinionated Next.js Demo kit with Express, Redux, styled-components, and react-testing-library.

## About

Next.js is an awesome and minimalistic framework to make a modern universal react app. However, there're times that we need a bit more features to build a complex SPA. That's why this project is born.

## Getting started

```bash
git clone https://github.com/cameron0myers/retrieve-git-repos-nextjs my-project
cd my-project
yarn install
yarn start
```

Then open `http://localhost:3100/` to see your app.

### Deployment

After `npm run build` finished, run

```bash
yarn serve
```

If you prefer using `now`, just modify `now.json` config.

## Structure overview

```tree
├── README.md
├── next.config.js
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── about.js
│   └── index.js
├── routes.js
├── server
│   └── index.js
├── src
│   ├── actions
│   │   └── repos.js
│   ├── components
│   │   └── SearchResults.js
│   ├── config.js
│   ├── containers
│   │   └── SearchRepoContainer.js
│   ├── libs
│   │   └── github.js
│   ├── reducers
│   │   ├── index.js
│   │   └── repos.js
│   ├── store
│   │   └── createStore.js
│   └── test
│       ├── components
│       │   └── SearchResults.test.js
│       └── test-utils.js
└── yarn.lock
```
