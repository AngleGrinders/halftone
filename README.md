# diag
**D**iagrams made **I**nteractive with **A**nimated **G**raphViz
 
## Prerequisites
1. Node.js
    * Download from [node.js](https://nodejs.org/en/download/)

## Installation & Run
1. npm install
2. ng serve

## Build & Publish
1. ng build --prod --base-href="https://glaza.github.io/diag/"
2. node_modules/angular-cli-ghpages/bin/angular-cli-ghpages

## Disign
1. diag will be displayed as one, client-side only, page without any server backend.
2. diag could be initialized by providing the model as a URL encoded argument.
3. diag will be composed of the following components:
    1. Controller
        *  A horizontal bar allowing the user to navigate which step to view and other controls like: play, pause, save, ...
    2. Editor
        * A text area where the DOT code is entered for the current step.
    3. Player
        * Area where d3-graphviz is used to render the current step.
4. The above components will be injected with the following services:
    1. Model
        * Holds all the DOT diagrams for all steps
    2. State
        * Holds the current step number

# Angular Stuff

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
