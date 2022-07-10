# Detviler Components (React)

This respository serves as a way for me and contributers to learn the nuances of creating a component library. 

## [Project Demo](cdetviler.github.io/detviler-components/)

## Installation

1. clone the repo
2. set up NVM (Node version manager) and then run `nvm use` within the root directory. This will allow `nvm` to look for `.nvmrc` in the project and use the specified version.
   1. You may not have this version specified in the app. In this case you would need to run `nvm install` and then run `nvm use`
3. in the root directory, run `yarn install`
4. in the root directory, run `yarn storybook` -- this should start the local storybook server at `http://localhost:6006/`. 
5. run `npm install -g plop` to globally install [PlopJs](https://plopjs.com/)
6. (Optional) If using VS code, grab the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) vscode extensions

## Chosen Technologies and Build Tools

1. This project uses [storybook](https://storybook.js.org/) for local development. 
2. This Project uses [Yarn](https://yarnpkg.com/) as a package manager
3. Components are written exclusively in [Typescript](https://www.typescriptlang.org/) using [React](https://reactjs.org/) as a framework
4. Styling is done with [StyledComponents](https://styled-components.com/)
5. [PlopJs](https://plopjs.com/) is used to automatically generate component files
6. Linting and code formatting are done by [eslint](https://eslint.org/) and [prettier](https://prettier.io/) using the airbnb styleguide 
7. This project uses Husky and Commitlint to enforce commit rules 
8. This project uses Rollup to compile the library
9. TODO: publish package using `npm-publish`
10. TODO: ADD [Jest](https://testing-library.com/docs/react-testing-library/intro/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing purposes

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

## Branching strategy

For the time being, the master branch will be `main`. Eventually it would be great to set up husky/commitlint to add automatic versioning and commit message enforcement, but for now we will just have to do things manually. For the time-being, we will:

1. branch off of main
2. create a branch per feature
3. in most cases, a "feature" will be a component
4. For example, if we wanted to create an Icon component, our branch would be called `feat/icon` and it would be branched off of the latest in `main`
5. An example commit message might be `feat(icon): adds icon directory and file structure`

If you're not developing a feature, but simply fixing a bug, you would instead create a branch called something like `fix/icon-display-correct-image` and a commit message such as `fix(icon): updates icon to display correct image`

If you're doing something like updating the Readme to document changes, you would instead create a branch called `chore/readme-add-icon-documentation` and a commit message such as `chore(readme): adds icon documentation`

## Developing a component
1. from the root directory, run `plop` and type the component name using a capital letter. This will generate all 6 necessary files for the component along with boilerplate for each file. If this does not run successfully, see step 5 of the Installation section. 