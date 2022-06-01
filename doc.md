# Documentation

[How to create an Electron app with React, TypeScript, and Electron Forge](https://www.electronforge.io/guides/framework-integration/react-with-typescript)


## Installation

```sh
yarn create electron-app my-new-app --template=typescript-webpack
```

## Configuration de typescript

```json
{
  "compilerOptions": {
    // ...
    "jsx": "react"
  },
  // ...
}
```

## Ajout des dépendances

```sh
yarn add react react-dom
yarn add --dev @types/react @types/react-dom
```

