# Angular Account Manager

This an Angular 11 application that simulates a bank Account Management Software, where the user may create, edit and remove user from teh application. There are two permission levels, admin, that haves full CRUD, ad just user, that can only access the user base, but not change it.

Basic admin login:

email: admin@gmail.com

password: admin

## Build and Run

Npm may be used to run the application. Go to the applications root folder, install all the packeges, `npm install`, them run `npm start` for a dev server, navigate to `http://localhost:4200/`.

You may find erros tryng to install the packages through NPM, so as alternative Yarn may be used to install the application dependencies. Go to the applications root folder, install all the packages, `yarn install`, after that may resume running with npm.

## Data and Storage

The application uses localstorage to simulate it's persistency, it will load the first users from a in memory source but after that switches to the localStorage.

## Back end

This application don't posess any real back end. It utilizes Angulars https-interceptors to divert the httpClient requests to a mock back-end a service.

## Tests

There are three components with tests and a service. The tests may be run using the command `npm test`.

## Continuous Integration

The project possess a test pipeline and a production pipeline. The former is fired when alterations or new features are pushed to the master branch, and the latter when a pull resquest is made to the production branch.

