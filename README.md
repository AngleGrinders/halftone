# diag
**D**iagrams made **I**nteractive with **A**nimated **G**raphViz
 
## Prerequisites
1. Node.js
    * Download from [node.js](https://nodejs.org/en/download/)

## Installation & Run
1. npm install
2. ng serve

## Build & Publish
1. ng build --prod --base-href="https://AngleGrinders.github.io/diag/"
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
