# lhowsam.com

Source code for my personal portfolio. Made with Gatsby, React & styled components

This project uses Gatsby (React), GraphQL and Styled Components

You can read about these technologies here:

- [Gatsby](https://www.gatsbyjs.org/)
- [GraphQL](https://graphql.org/)
- [Styled Components](https://www.styled-components.com/)
<br /> 

Unit tests & linting pipeline: 
<br /> 
<br /> 
[![Build Status](https://dev.azure.com/lukehowsam/testing/_apis/build/status/luke-h1.lhowsam.com?branchName=dev)](https://dev.azure.com/lukehowsam/testing/_build/latest?definitionId=5&branchName=dev)

## Project Structure 

* Main - Represents what is currently on production (deployments are handled by Vercel)

* Dev - Represents the features currently being worked on 



## Available NPM Commands

### Develop

Start a hot-reloading development environment accessible at `localhost:8000`

```shell
npm start
```

### Build

Get an optimized production build 

```shell
npm run build
```

### Serve

start a local server for testing your built site.

```shell
npm run serve
```

### Lint

Lint the code according to the Airbnb eslint config 

```shell
npm run lint
```

### Clean

Remove the .cache & public directory for a scratch compile.

```shell
gatsby clean 
```


### Deep Clean

Remove the .cache, public, package-lock.json and node_modules for a scratch compile.

```shell
npm run deep-clean 
```
