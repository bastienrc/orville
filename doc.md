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

## Configuration d'Electron Forge
https://www.electronforge.io/configuration

## Auto Update
https://github.com/electron/update-electron-app

## Construction de l'application sur les differents OS avec Github Actions
https://medium.com/@johnjjung/building-an-electron-app-on-github-actions-windows-and-macos-53ab69703f7c
https://www.electron.build/
