# Jest Testing

http://redux.js.org/docs/recipes/WritingTests.html
https://facebook.github.io/jest/docs/en/expect.html 

#### Writing tests for benchBNB for lecture 

- Agenda (Redux cycle testing) 
  - Setup
  - Practice
  - Reducers
  - Action Creators
  - Async Action Creators 

- Why we write tests
  - form of documentation
  - assurance of working functionality when refactoring
  - catch bugs
  - TDD

- Jest
  - created by FB for testing React 
  - can use for pure JS as well 
  - setup
    - npm install --save-dev jest
    - npm install --save-dev redux-mock-store
  - you need to create a .babelrc because jest doesn't go through webpack 