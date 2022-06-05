# Detviler Web Components

This respository serves as a way for me and contributers to learn the nuances of creating a component library. 

## Installation

1. clone the repo
2. set up NVM (Node version manager) and then run `nvm use` within the root directory. This will allow `nvm` to look for `.nvmrc` in the project and use the specified version.
3. in the root directory, run `yarn install`
4. in the root directory, run `yarn storybook` -- this should start the local storybook server at `http://localhost:6006/`. 

## Chosen Technologies and Build Tools

1. This project uses [storybook](https://storybook.js.org/) for local development. 
2. This Project uses [Yarn](https://yarnpkg.com/) as a package manager
3. Components are written exclusively in [https://www.typescriptlang.org/](Typescript) and [https://reactjs.org/](React)
4. Styling is done with [StyledComponents](https://styled-components.com/)
5. TODO: Testing will eventually be added using [Jest](https://testing-library.com/docs/react-testing-library/intro/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
6. TODO: Rollup might eventually be added in order to publish the package to NPM
7. TODO: Husky and Commitlint could be added to enforce commit rules 

## Directory Structure

```
detviler-components/
├─ .storybook/
├─ node_modules/
├─ src/
│  ├─ components/
│  │  ├─ Button/                   // every component has these 6 files at minimum
│  │  │  ├─ Button.stories.tsx     // the *.stories.tsx file contains all stories for storybook
│  │  │  ├─ Button.styles.tsx      // the *.styles.tsx file contains all necessary styled components
│  │  │  ├─ Button.tsx             // the *.tsx is the main component file
│  │  │  ├─ Button.types.ts        // the *.types.ts contains all types and interfaces for the component
│  │  │  ├─ Button.tests.ts        // the *.tests.ts contains all tests for the component
│  │  │  ├─ index.ts               // the index.ts file exports the component for use
│  │  ├─ Icon/
│  │  ├─ Link
│  │  ├─ Theme/
│  │  │  ├─ themeDefault.js        // themeDefault is a default theme that can be used with themeProvider
│  │  │  ├─ ThemeProvider.tsx      // ThemeProvider optionally provides the theme for consumers
│  ├─ index.ts                     // index.ts exports all components
│  ├─ types.ts                     // types.ts contains all global types
├─ .gitignore
├─ package.json
├─ README.md
├─ tsconfig.json
├─ yarn.lock
```