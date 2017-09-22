# Safe Key Store

Safe Key Store

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# NativeScript

## First time Android
Run `npm run setup:android` to generate all the required files needed to build the application

## Build for Android
Run `npm run build:android` to compile and generate the application for Android

## Run in an Android terminal / emulator
Run `npm run android` to generate and launch the application in Android

## Estructura del proyecto

<pre>
+-- OSFPOV                         # Raiz del proyecto
|    +-- app
|    |    +-- App_Resources        # Recursos específicos para cada plataforma
|    |    |    +-- Android
|    |    |    +-- iOS
|    |    +-- assets               # Recursos genéricos
|    |    |    +-- ...
|    |    +-- pages                # Cada página de la aplicación
|    |    |    +-- web             #   Páginas específicas para la aplicación web
|    |    |    |    +-- core       #     Componente principal de la aplicación
|    |    |    |    +-- ...        #     <i>Distintos componentes de la aplicación</i>
|    |    |    +-- mobile          #   Páginas específicas para la aplicación móvil nativa
|    |    |    |    +-- core       #     Componente principal de la aplicación
|    |    |    |    +-- ...        #     <i>Distintos componentes de la aplicación</i>
|    |    +-- shared               # Clases y ficheros compartidos
|    |    |    +-- models          #   Modelo
|    |    |    +-- services        #   Servicios de acceso a bases de datos, APIs,...
|    |    |    +-- ...             #   <i>Distintos elementos compartidos</i>
|    +-- hooks                     # Ficheros de NativeScript para preprocesadores
|    |    +-- ...
|    +-- e2e                       # Tests completos de la aplicación
|    |----- app.e2e-spec.ts        #   Especificación del test
|    |----- app.po.ts              #   Clase de ayuda para ejecutar el test
|    |----- tsconfig.e2e.json      #   Configuración de TypeScript para los tests
|    +-- node_modules              # Librerias y dependencias
|    |    +-- ...
|    +-- platforms                 # Código específico para construir cada plataforma
|    |    +-- android
|    |    +-- ios
|----- .angular-cli.json           # Configuración de Angular-Cli
|----- .editorconfig               # Configuración para los IDEs
|----- .gitignore                  # Lista de inclusión para Git
|----- karma.conf.js               # Configuración de los tests de componentes
|----- package.json                # Configuración del proyecto
|----- protractor.conf.js          # Configuración de los tests e2e
|----- references.d.ts             # Listado de cada fichero de declaración de TypeScript
|----- tsconfig.json               # Configuración de TypeScript
|----- tslint.json            	   # Configuración de Lint
</pre>

## Formato de los Commits

**tipo**(*módulo*): Mensaje

Ejemplos:
```
fix(selector): Correcte Selector operators
chore(release): Release patch version (v1.1.5)
refactor: Move JSW-Logger module outside the project
chore(publishing): Publish API doc and NPM when version changes
chore(release): Release patch version (v1.1.4)
feat(collection): Add "destroy" and "delete" aliases for Collection#remove
```
Aquí hay un ejemplo de cómo se genera: [Changelog](https://github.com/EastolfiWebDev/MongoPortable/blob/master/CHANGELOG.md)

| Tipo     | Entrada                  | Descripción                       |
| :------- | :----------------------- | :-------------------------------- |
| feat     | Features                 | Nuevas funcionalidades            |
| fix      | Bug Fixes                | Corrección de errores             |
| perf     | Performance Improvements | Mejoras de rendimiento            |
| revert   | Reverts                  | Anulación de una parte del código |
| docs     | Documentation            | Documentación                     |
| style    | Styles                   | Cambios de estilos                |
| refactor | Code Refactoring         | Reestructuración de código        |
| test     | Tests                    | Tests                             |
| chore    | Chores                   | Cambios varios                    |
| discard  | ------------------------ | Ignora este commit                |
