# AngularTest

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

## _`Commands used for the project`_

//creates new project
cd C:\Users\victor\Documents\IdeaProjects\  
ng new angularTest  

cd C:\Users\victor\Documents\IdeaProjects\angularHeroes  

// start server  
ng serve --open

// build the project  
ng build

// creates a component  
ng generate component heroes  
ng generate component hero-detail  
ng generate component messages  
ng generate component dashboard  
ng generate component hero-search  

// creates a service  
ng generate service hero --module=app  
ng generate service message --module=app  
ng generate service in-memory-data --module=app  

// creates a module for routing  
ng generate module app-routing --flat --module=app  

// Install the In-memory Web API package from npm  
npm i --save angular-in-memory-web-api@0.5.0 --save  
